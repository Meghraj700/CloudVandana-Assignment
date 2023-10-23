package com.cloudVandanaSol;


public class PangramChecker {
	public static void main(String[] args) {
		String input = "The quick brown fox jumps over the lazy dog"; 
		boolean isPangram = isPangram(input);

		if (isPangram) {
			System.out.println("The input is a Pangram.");
		} else {
			System.out.println("The input is not a Pangram.");
		}
	}

	public static boolean isPangram(String input) {

		int [] alphabet = new int[26];


		input = input.toLowerCase();


		for (int i = 0; i < input.length(); i++) {
			char ch = input.charAt(i);


			if ('a' <= ch && ch <= 'z') {
				int index = ch - 'a';
				alphabet[index] = 1;
			}
		}


		for (int i = 0; i < alphabet.length; i++) {
			if (alphabet[i]==1) {
				++i; 
			}
			else {
				return false;
			}
		}

		return true; 
	}
}
