package io.github.shaunlusk.utils;

import java.awt.Color;
import java.awt.image.BufferedImage;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

import javax.imageio.ImageIO;

public class C64PixMapExtractor {

	
	public static final String pixMapEntry = "{\"type\":\"PIXEL\", \"x\":$x, \"y\":$y, \"color\":$color}";
	
	public static final int[][] colors = {
		{0,0,0},	//Black
		{255,255,255},	//White
		{224,64,64},	//Red
		{96,255,255},	//Cyan
		{224,96,224},	//Magenta
		{64,224,64},	//Green
		{64,64,224},	//Blue
		{255,255,64},	//Yellow
		{224,160,64},	//Orange
		{156,116,72},	//Brown
		{255,160,160},	//Pink
		{84,84,84},	//DGrey
		{136,136,136},	//Grey
		{160,255,160},	//LGreen
		{160,160,255},	//LBlue
		{192,192,192},	//LGrey 
	};

	/**
	 * @param args
	 * 0 : imagePath - the full file path to the input image
	 * 1 : outFilePath - the target file for writing the output
	 * 2 : targetWidth - the target width for the PixArray
	 * 3 : targetHeight - the target height for the PixArray
	 * 4 : coerceToC64Palette - for each PixMapEntry, pick the closest C64 color 
	 * 5 : useIdx - Only if coerceToC64Palette is true, use the index instead of the color value
	 */
	public static void main(String[] args) {
		String imagePath = args[0];	
		int targetWidth = Integer.parseInt(args[2]);
		int targetHeight = Integer.parseInt(args[3]);
		String outFilePath = args[1];
		boolean coerceToC64Palette = Boolean.parseBoolean(args[4]);
		boolean useIdx = Boolean.parseBoolean(args[5]);
	
		BufferedImage img = getInputImage(imagePath);
		
		ArrayList<String> pixArray = getPixArray(img, targetWidth, targetHeight, coerceToC64Palette, useIdx);
		
		writePixArrayToFile(outFilePath, pixArray);
		
		println("Finished.");
	}

	public static BufferedImage getInputImage(String path) {
		BufferedImage img = null;
		try {
		    img = ImageIO.read(new File(path));
		} catch (IOException e) {
			println("Couldn't read input file.");
			System.exit(0);
		}
		println("Successfully read file.");
		return img;
	}

	public static void writePixArrayToFile(String outFilePath, ArrayList<String> pixArray) {
		BufferedWriter writer = null;
		boolean commaFlag = false;
		try  {			
			writer = new BufferedWriter(new FileWriter(outFilePath));	
			writer.write("[");
			// do the thing
			for (String pixEntry:pixArray) {
				if (commaFlag) {
					writer.write(",");
					writer.newLine();
				}
				writer.write(pixEntry);
				if(!commaFlag) commaFlag = true;
			}
			writer.write("]");
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			if (writer != null) {
				try {
					writer.close();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} finally {
					
				}
			}
			
		}
	}

	public static ArrayList<String> getPixArray(BufferedImage img, int targetWidth, int targetHeight, boolean coerceToC64Palette, boolean useIdx) {
		ArrayList<String> pixArray = new ArrayList<String>();
		String pixMap;
		PixColorInfo color;
		
		// for each target pixel get color from source image
		for (int y = 0; y < targetHeight; y++) {
			for (int x = 0; x < targetWidth; x++) {
				color = getColorFromPixel(img, targetWidth, targetHeight, x, y, coerceToC64Palette, useIdx);
				
				// create pixmap entry
				pixMap = getPixMapEntry(x, y, colorToString(color, coerceToC64Palette, useIdx));
				
				// add to list
				pixArray.add(pixMap);
			}
		}
		
		return pixArray;
	}

	public static PixColorInfo getColorFromPixel(BufferedImage img, int targetWidth, int targetHeight, int x, int y, boolean coerceToC64Palette, boolean useIdx) {
		int[] range = getRangeForSourceImage(img.getWidth(), img.getHeight(), targetWidth, targetHeight, x, y);		
		Color color = getAverageColorFromRange(img, range);
		PixColorInfo paci = null;
		if (coerceToC64Palette) {
			paci = getClosestColor(color);
		} else {
			paci = new PixColorInfo(color, -1);
		}
		return paci;
	}

	public static Color getAverageColorFromRange(BufferedImage img, int[] range) {
		int sx = range[0];
		int sy = range[1];
		int swidth = range[2];
		int sheight = range[3];
		int xLimit = sx + swidth;
		int yLimit = sy + sheight;
		int area = swidth * sheight;
		int pixel;
		Color color;
		
		int red = 0, green = 0, blue = 0;
		
		for (int y = sy; y < yLimit; y++) {
			for (int x = sx; x < xLimit; x++) {
				pixel = img.getRGB(x, y); 
				color = new Color(pixel); 
				red += color.getRed();
				green += color.getGreen();
				blue += color.getBlue();
			}
		}
		
		red /= area;
		green /= area;
		blue /= area;
		
		return new Color(red, green, blue);
	}

	public static int[] getRangeForSourceImage(int sourceWidth, int sourceHeight, int targetWidth, int targetHeight, int x, int y) {
		double widthRatio = sourceWidth / (double)targetWidth;
		double heightRatio = sourceHeight / (double)targetHeight;
		int xAmount = (int) Math.round(widthRatio);
		int yAmount = (int) Math.round(heightRatio);
		int xStart = (int) Math.floor(widthRatio * x);
		int yStart = (int) Math.floor(heightRatio * y);
		int[] range = new int[4];
		range[0] = xStart;
		range[1] = yStart;
		range[2] = xAmount;
		range[3] = yAmount;
		return range;
	}

	public static String colorToString(PixColorInfo color, boolean coerceToC64Palette, boolean useIdx) {
		if (coerceToC64Palette && useIdx) return String.valueOf(color.idx);
		return "\"rgb(" + color.color.getRed() + "," + color.color.getGreen() + "," + color.color.getBlue() + ")\"";
	}

	private static String getPixMapEntry(int px, int py, String color) {
		int x = px;
		int y = py;
		String result = pixMapEntry.replaceAll("\\$x", String.valueOf(x));
		result = result.replaceAll("\\$y", String.valueOf(y));
		result = result.replaceAll("\\$color", color);
		return result;
	}
	
	private static PixColorInfo getClosestColor(Color color) {
		int idx = -1;
		double bestDist = Double.MAX_VALUE;
		int bestIdx = -1;
		Color bestColor = null;
		for (int[] rgb : colors) {
			idx++;
			Color otherColor = new Color(rgb[0],rgb[1],rgb[2]);
			double dist = getColorDistance(color, otherColor);
			if (dist < bestDist) {
				bestDist = dist;
				bestIdx = idx;
				bestColor = otherColor;
			}
			
		}
		PixColorInfo retVal = new PixColorInfo(bestColor,  bestIdx);
		return retVal;
	}
	
	public static double getColorDistance(Color color1, Color color2) {
		int r1 = color1.getRed();
		int g1 = color1.getGreen();
		int b1 = color1.getBlue();
		int r2 = color2.getRed();
		int g2 = color2.getGreen();
		int b2 = color2.getBlue();
		
		double rd = Math.pow(r1 - r2, 2);
		double gd = Math.pow(g1 - g2, 2);
		double bd = Math.pow(b1 - b2, 2);
		
		double retVal = Math.sqrt(rd + gd + bd);
		
		return retVal;
	}
	
	public static void println(String msg) {
		System.out.println(msg);
	}
	public static void print(String msg) {
		System.out.print(msg);
	}
}


class PixColorInfo {
	public Color color;
	public int idx;
	
	public PixColorInfo(Color color, int idx) {
		this.color = color;
		this.idx = idx;
	}
}

