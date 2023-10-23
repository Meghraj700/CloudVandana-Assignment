package com.cloudVandanaSol;

public class RomanToInteger {
	//static int prevValue = 0;
	public static void main(String[] args) {
		String roman = "IXX"; 
		int result = romanToInteger(roman);
		System.out.println("Roman numeral " + roman + " is equivalent to integer " + result);
		// System.out.println(prevValue);
	}

	public static int romanToInteger(String s) {
		int result = 0;
		int prevValue = 0;

		for (int i = s.length() - 1; i >= 0; i--) {
			char currentChar = s.charAt(i);
			int curValue = romanCharToInt(currentChar);

			if (curValue < prevValue) {     //10<0   no   10<10  no    1<10 yes
				result -= curValue;									// res=20-1=19
			} else {
				result += curValue;			//result=0+10=10   res=10+10=20
			}

			prevValue = curValue;			//prevalue=10		10    // 1
		}

		return result;

	}

	public static int romanCharToInt(char c) {
		switch (c) {
		case 'I': return 1;
		case 'V': return 5;
		case 'X': return 10;
		case 'L': return 50;
		case 'C': return 100;
		case 'D': return 500;
		case 'M': return 1000;
		default: return 0;
		}
	}
}

