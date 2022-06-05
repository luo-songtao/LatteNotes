---
title: LeetCode - Dynamic Programming
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2022-03-01 08:00:00 +0800
categories: [LeetCode, Dynamic Programming]
tags: [LeetCode, Dynamic Programming]
math: true
mermaid: true

---

# Dynamic Programming

## Level Easy

### LeetCode0053 maximum-subarray
```c++
int LeetCode0053::maxContiguousSubArraySum(vector<int>& nums) {
    /**
     * Find largest sum subarray, but just return its sum.
     * Note: A subarray is a `contiguous` part of an array
     * 
     * https://leetcode-cn.com/problems/maximum-subarray/
     * 
     * Examples:
     * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
     * Output: 6
     * Explanation: [4,-1,2,1] has the largest sum = 6.
     * 
     * Input: nums = [5,4,-1,7,8]
     * Output: 23
     * 
     * Follow up: If you have figured out the O(n) solution, try coding another solution
     * using the divide and conquer approach, which is more subtle.
     * 
     * Solutions: 
     *		let `mcsas = maxContiguousSubArraySum`
     *		
     *		transition formula: 
     *			mcsas(n) = max(mcsas(n-1), mcsas(n-1)+num[n])
     * 
     *		Keypoint: 考虑连续子序列的中断，然后重置起点的问题
     *			if sum(curSubArray) + nums[n] > num[n]，则子序列保持连续，即 curSum += nums[n]
     *			else，子序列中断，curSubArray=[num[n]]，即 curSum = nums[n]
     * 
     * \param nums Array numbers
     * \return maxsum of subarray
     */
    if (nums.size() == 0) { return NULL; }
    if (nums.size() == 1) { return nums[0]; }
    int maxSum = nums[0];
    int curSum = maxSum;
    for (int n = 1; n < nums.size(); ++n) {
        curSum = max(nums[n], curSum + nums[n]);
        maxSum = max(curSum, maxSum);
    }
    return maxSum;
}

```

### LeetCode0070 climbing-stairs

```c++
int LeetCode0070::climbStairs(int n) {
    /**
     * You are climbing a staircase. It takes n steps to reach the top.
     * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
     *
     * https://leetcode-cn.com/problems/climbing-stairs/
     * 
     * Example:
     * 
     * Input: n = 2
     * Output: 2
     * Explanation: There are two ways to climb to the top.
     * 1. 1 step + 1 step
     * 2. 2 steps
     * 
     * Input: n = 3
     * Output: 3
     * Explanation: There are three ways to climb to the top.
     * 1. 1 step + 1 step + 1 step
     * 2. 1 step + 2 steps
     * 3. 2 steps + 1 step
     * 
     * Solutions: 
     *		transition formula: steps_n = steps_n_1 + steps_n_2
     * .
     */
    int steps_n_1 = 1, steps_n_2 = 2, steps_n = 0;
    if (n == 1) steps_n = steps_n_1;
    if (n == 2) steps_n = steps_n_2;
    for (int i = 3; i <= n; ++i) {
        steps_n = steps_n_1 + steps_n_2;
        steps_n_1 = steps_n_2;
        steps_n_2 = steps_n;
    }
    return steps_n;
}
```

### LeetCode0118 pascals-triangle

```c++
vector<vector<int>> LeetCode0118::generatePascalsTriangle(int numRows) {
    /** 
     * Given an integer numRows, return the first numRows of Pascal's triangle. (即杨辉三角)
     * In Pascal's triangle, each number is the sum of the two numbers directly above it
     * 
     * https://leetcode-cn.com/problems/pascals-triangle/
     * 
     * Example:
     * Input: numRows = 5
     * Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
     * 
     * Solutions:
     *		Boundary: n=1, array2D=[[1]]
     *		Transition Formula: 
     *			for i in 0~n-1:
     *				if i==0: array2D[n][0] = 1; 
     *				if 0<i<n-1: array2D[n][i] = array2D[n-1][i] + array2D[n-1][i-1]
     *				if i== n-1: array2D[n][n-1] = 1
     *			
     * \param numRows
     * \return All Rows
     */
    vector<vector<int>> array2D(numRows);
    for (int n = 0; n < numRows; ++n) {
        array2D[n].resize(n + 1);
        array2D[n][0] = 1;
        for (int i = 1; i < n; ++i) {
            array2D[n][i] = array2D[n - 1][i] + array2D[n - 1][i-1];
        }
        array2D[n][n] = 1;
    }
    return array2D;
 }

```

### LeetCode0119 pascals-triangle-ii

```c++
vector<int> LeetCode0119::generatePascalsTriangleIIandGetLastRow(int rowIndex) {
    /**
     * Return the last row of PascalsTriangle given rowIndex
     * 
     * Same as LeetCode0118 to generate Pascals' Triangle, but this time, we do not need save all rows, 
     * only need to retain (n-1)-th row and update n-th row
     * 
     * https://leetcode-cn.com/problems/pascals-triangle-ii/
     * 
     * Solutions:
     *		Transition Formula: curRow[i] = preRow[i] + preRow[i - 1], forall i in [1,n-1]
     * 
     * \param rowIndex
     * \return 
     */
    vector<int> preRow;
    vector<int> curRow;
    for (int n = 0; n <= rowIndex; ++n) {
        for (int i = 1; i < n; ++i) {
            curRow[i] = preRow[i] + preRow[i - 1];
        }
        curRow.push_back(1);
        preRow = curRow;
    }
    return curRow;
}
```

#### LeetCode0119 pascals-triangle-ii


使用组合数学方式求解 LeetCode0119

```c++
vector<int> LeetCode0119::generatePascalsTriangleIIandGetLastRow2(int rowIndex) {
    /**
     * Return the last row of PascalsTriangle given rowIndex
     * 
     * Solution: Use a property of Combinatorics: 
     *			
     *		C(n,m) = n!/(n-m)!  = C(n,m-1) * (n-m+1)/m
     * 
     * \param rowIndex
     * \return The last row of PascalsTriangle given rowIndex
     */
    vector<int> row(rowIndex+1);
    row[0] = 1;
    for (int m = 1; m <= rowIndex; ++m) {
        // using 1LL to avoid overflow problem in multiplying and dividing
        row[m] = 1LL * row[m - 1] * (1LL * rowIndex - m + 1) / m;    
    }
    return row;
}
```

### LeetCode0121 best-time-to-buy-and-sell-stock

```c++
int LeetCode0121::maxProfit(vector<int>& prices) {
    /**
     * You are given an array prices where prices[i] is the price of a given stock on the ith day
     * You want to maximize your profit by choosing a single day to buy one stock and choosing 
     * a different day in the future to sell that stock.
     * 
     * Return the maximum profit you can achieve from this transaction. 
     * If you cannot achieve any profit, return 0.
     * 
     * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
     * 
     * Input: prices = [7,1,5,3,6,4]
     * Output: 5
     * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
     * Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
     * 
     * Solutions: 
     *		Transition Formula: maxProfit(n) = max(maxProfit(n), maxProfit(n-1))
     *		
     *		Keypoint: 
     *			if prices[i] - min(prices[0:i-1]) > maximumProfit, 
     *			then update maximumProfit, and buyIndex
     * 
     * \param prices : an array prices 
     * \return maximum profit
     */
    int buyIndex = 0;
    int minimumPriceIndex = 0;
    int maximumProfit = 0;
    int curProfit = 0;

    for (int i = 1; i < prices.size(); ++i) {
        // record the min price of prices[0:i+1]
        if (prices[minimumPriceIndex] > prices[i] && prices[buyIndex] > prices[i]) {
            minimumPriceIndex = i;
        }
        // Update max profit if exists smaller one
        curProfit = prices[i] - prices[minimumPriceIndex];
        if (maximumProfit < curProfit) {
            maximumProfit = curProfit;
            buyIndex = minimumPriceIndex;
        }
    }
    return maximumProfit;
}
```

### LeetCode0338 counting-bits

```c++
vector<int> LeetCode0338::countBits(int n) {
    /**
     * Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), 
     * ans[i] is the number of 1's in the binary representation of i.
     * 
     * https://leetcode-cn.com/problems/counting-bits/
     * 
     * Input: n = 2
     * Output: [0,1,1]
     * Explanation:
     *	0 --> 0
     *	1 --> 1
     *	2 --> 10
     * 
     * Solutions: 
     *		'highestBit' Transition Formula: 
     *			if n & (n-1) == 0, then n can be a 'highestBit' number; i.e. 'highestBit' \in \{1,2,4,8,16,......\}
     *				'highestBit' number has only one bit is '1' at its highest bit.
     *				For example:
     *					bin(2)=0b10
     *					bin(16)=0b10000
     *			
     *			countBits[n] = countBits[n-highestBit] + 1
     *				For example: 
     *					bin(6)=0b101, its highestBit is bin(4)=0b100, then countBits[6] = countBits[6-4]+1 = 2
     *					bin(15)=0b1111, its highestBit is bin(8)=0b1000, then countBits[15] = countBits[15-8]+1 = 4
     *				therefor, once we have known the 'highestBit' of number 'n' , we can obtain its 1-bits count in O(1)
     * 
     *		'lowestBit' Transition Formula: using '>>' remove lowest bit, then we have: countBits[n] = countBits[n>>1] + (n&1)
     *			if 'n' is egg (lowest bit is 0), then countBits[n] = countBits[n/2] = countBits[n>>1]
     *				6>>1 = 3;    countBit[6] = countBits[3] = 2
     *				14>>1 = 7;   countBit[14] = countBits[7] = 3
     *			if 'n' is odd (lowest bit is 1), then countBits[n] = countBits[(n-1)/2] + 1 = countBits[n>>1] + 1
     *				7>>1 = 3;	countBit[7] = countBits[3] + 1 = 3
     *				15>>1 = 7;   countBit[15] = countBits[7] + 1 = 4
     *			n & 1 = 0 or 1
     *	
     *		'lowestBitof1' Transition Formula: 
     *			using the property of operator 'n&(n-1)',  we can remove the n's lowest bit of 1, 
     *			and then: conuntBits[n] = countBits[n&(n-1)]+1
     *				For example:
     *					5 & 4 = 4, i.e. 0b101 & 0b100 = 0b100, then conuntBits[5] = countBits[5&4]+1 = 2
     *					8 & 7 = 0, i.e. 0b1000 & 0b0111 = 0b0, then conuntBits[8] = countBits[8&7]+1 = 1
     * 
     * \param n
     * \return 
     */

    vector<int> counts(n + 1);
    for (int i = 1; i <= n; ++i) {
        // using 'lowestBitof1' Transition Formula
        counts[i] = counts[i & (i-1)] + 1;
    }
    return counts;
    
}

```


### LeetCode0392 is-subsequence

```c++
bool LeetCode0392::isSubsequence(string s, string t) {
    /**
     * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
     * 
     * A subsequence of a string is a new string that is formed from the original string 
     * by deleting some (can be none) of the characters without disturbing the relative 
     * positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
     * 
     * s and t consist only of lowercase English letters
     * 
     * https://leetcode-cn.com/problems/is-subsequence/
     * 
     * Example:
     * Input: s = "abc", t = "ahbgdc"
     * Output: true
     * 
     * Input: s = "axc", t = "ahbgdc"
     * Output: false
     * 
     * Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= `10^9`, 
     * and you want to check one by one to see if t has its subsequence. 
     * In this scenario, how would you change your code?
     * 
     * Solutions:
     *		Normal Solution: double pointer
     *			while i<s.size && j <t.size:
     *				if s[i] == t[j]:
     *					i++ 
     *				j++
     *			return true if i == s.size, else false
     *		
     *		(DP)Transition Formula:
     *			Let M = t.size
     *			
     *			Using a `M+1 x 26` matrix , named by 'P', P[i,j] indicates the first occurrence of 
     *			the letter 'x' in t.
     *			
     *			If some letter 'x' not in t, then we simply let P[i,'x'] = M, else P[i,'x'] should be some numnber in [0,M-1].
     *			
     *			for i in M~0: if t[i] == 'x', P[i,'x'] = i else P[i,'x'] = P[i+1,'x']
     * 
     *			Note: here 'x' represents the index of some letter in array [a,b,c,d,......,x,y,z], 
     *						for example, if currentletter is 'c' then 'x' = 2
     * 
     * \param s 
     * \param t
     * \return 
     */

    // Method1: Double Pointer
    /*int sLen = s.size(), tLen = t.size();
    int sIdx = 0, tIdx = 0;
    while (sIdx < sLen && tIdx < tLen) {
        if (s[sIdx] == t[tIdx]) sIdx++;
        tIdx++;
    }
    return sIdx == sLen;*/

    // Method2: DP solution. This method works for the scenario described in "Follow up"
    int M = t.size();
    // 1. initialize a `M+1 x 26` dimension Matrix, and fill it with 0 
    vector<vector <int>> P(M + 1, vector<int>(26, 0));
    // 2. initlialize the numbers of row P[M+1]  with "M"
    for (int j = 0; j < 26; ++j) {
        P[M][j] = M;
    }

    // 3. update matrix P respect to target string `t`
    for (int i = M - 1; i >= 0; --i) {
        for (int j = 0; j < 26; ++j) {
            if (t[i] == j + 'a') 
                P[i][j] = i;
            else 
                P[i][j] = P[i + 1][j];
        }
    }

    // 4. search if string `s` is a non-contiguous subsequence of `t` according Matrix P
    int rowIdx = 0;
    for (int n = 0; n < s.size(); ++n) {
        if (P[rowIdx][s[n] - 'a'] == M) {
            return false;
        }
        rowIdx = P[rowIdx][s[n] - 'a'] + 1;
    }
    return true;

}
```

### LeetCode0509 fibonacci-number

```c++
int LeetCode0509::fibonacci(int n) {
    /**
     * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci 
     * sequence, such that each number is the sum of the two preceding ones, starting 
     * from 0 and 1. That is,
     *		
     *		F(0) = 0, F(1) = 1
     *		F(n) = F(n - 1) + F(n - 2), for n > 1.
     * 
     * https://leetcode-cn.com/problems/fibonacci-number/
     * 
     * \param n
     * \return 
     */

    // Recursion version
    /*
    if (n<=1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
    */

    // DP version: bottom up
    if (n<=1) return n;
    int fnMinus1 = 0, fnMinus2 = 1;
    int fn = fnMinus1;
    for (int i = 2; i <= n; ++i) {
        fn = fnMinus1 + fnMinus2;
        fnMinus1 = fnMinus2;
        fnMinus2 = fn;
    }
    return fn;
}
```

### LeetCode0746 min-cost-climbing-stairs

```c++
int LeetCode0746::minCostClimbingStairs(vector<int>& cost) {
    /**
     * You are given an integer array cost where cost[i] is the cost of ith step on a staircase.
     * Once you pay the cost, you can either climb one or two steps.
     * 
     * You can either start from the step with index 0, or the step with index 1.
     * 
     * Return the minimum cost to reach the top of the floor.
     * 
     * 2 <= cost.length 
     * 
     * https://leetcode-cn.com/problems/min-cost-climbing-stairs/
     * 
     * Example:
     * Input: cost = [10,15,20]
     * Output: 15
     * Explanation: You will start at index 1.
     * - Pay 15 and climb two steps to reach the top.
     * The total cost is 15.
     * 
     * Input: cost = [1,100,1,1,1,100,1,1,100,1]
     * Output: 6
     * Explanation: You will start at index 0.
     * - Pay 1 and climb two steps to reach index 2.
     * - Pay 1 and climb two steps to reach index 4.
     * - Pay 1 and climb two steps to reach index 6.
     * - Pay 1 and climb one step to reach index 7.
     * - Pay 1 and climb two steps to reach index 9.
     * - Pay 1 and climb one step to reach the top.
     * The total cost is 6.
     * 
     * Solutions: 
     *		Transition Formula:
     *			totalCost[n] = min(totalCost[n-1] + cost[n-1], totalCost[n-2]+cost[n-2])
     * 
     *      Note: in this problem, the finall result of n will equal cost.size.
     *		
     *		I think this is not a well defined problem.
     * 
     * \param cost
     * \return 
     */
    int n = cost.size();
    int costIMinus1 = 0, costIMinus2 = 0;
    int costI = 0;
    for (int i = 2; i <= n; ++i) {
        costI = min(costIMinus1 + cost[i - 1], costIMinus2 + cost[i - 2]);
        costIMinus2 = costIMinus1;
        costIMinus1 = costI;
    }
    return costI;
}
```

### LeetCode1025 divisor-game

```c++
bool LeetCode1025::divisorGame(int n) {
    /**
     * Alice and Bob take turns playing a game, with Alice starting first.
     * 
     * Initially, there is a number n on the chalkboard.
     * On each player's turn, that player makes a move consisting of:
     *	- Choosing any x with 0 < x < n and n % x == 0.
     *	- Replacing the number n on the chalkboard with n - x.
     * 
     * Also, if a player cannot make a move, they lose the game.
     * 
     * Return true if and only if Alice wins the game, assuming both players play optimally.
     * 
     * https://leetcode-cn.com/problems/divisor-game/
     * 
     * Example:
     * Input: n = 2
     * Output: true
     * Explanation: Alice chooses 1, and Bob has no more moves.
     * 
     * Input: n = 3
     * Output: false
     * Explanation: Alice chooses 1, Bob chooses 1, and Alice has no more moves.
     * 
     * Solutions: 
     *		https://leetcode-cn.com/problems/divisor-game/solution/chu-shu-bo-yi-by-leetcode-solution/
     *	
     *		This problem is so boring. 
     *		结论是：n 为奇数的时候 Alice（先手）必败，n 为偶数的时候 Alice 必胜
     *		The optimal result is 'n%2==0' ......
     *		转换成DP问题：
     * 
     * \param n
     * \return 
     */
    return n % 2 == 0;
}
```

### LeetCode1137 n-th-tribonacci-number

```c++
int LeetCode1137::tribonacci(int n) {
    /**
     * The Tribonacci sequence Tn is defined as follows: 
     * T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
     * Given n, return the value of Tn
     * 
     * https://leetcode-cn.com/problems/n-th-tribonacci-number/
     * 
     * Example:
     * Input: n = 4
     * Output: 4
     * Explanation:
     * T_3 = 0 + 1 + 1 = 2
     * T_4 = 1 + 1 + 2 = 4
     * 
     * Input: n = 25
     * Output: 1389537
     * 
     * 
     * \param n
     * \return 
     */
    int t0 = 0, t1 = 1, t2 = 1;
    if (n == 0) return 0;
    if (n == 1) return 1;
    if (n == 1) return 1;
    int tn = 1;
    for (int i = 3; i <= n; i++) {
        tn = t2 + t1 + t0;
        t0 = t1;
        t1 = t2;
        t2 = tn;
    }
    return tn;
}
```

### LeetCode1646 get-maximum-in-generated-array

```c++
int LeetCode1646::getMaximumGenerated(int n) {
    /**
     * You are given an integer n. A 0-indexed integer array nums of length n + 1 is 
     * generated in the following way:
     * - nums[0] = 0
     * - nums[1] = 1
     * - nums[2 * i] = nums[i] when 2 <= 2 * i <= n
     * - nums[2 * i + 1] = nums[i] + nums[i + 1] when 2 <= 2 * i + 1 <= n
     * Return the maximum integer in the array nums​​​.
     * 
     * https://leetcode-cn.com/problems/get-maximum-in-generated-array/
     * 
     * Example:
     * Input: n = 7
     * Output: 3
     * Explanation: According to the given rules:
     * - nums[0] = 0
     * - nums[1] = 1
     * - nums[(1 * 2) = 2] = nums[1] = 1
     * - nums[(1 * 2) + 1 = 3] = nums[1] + nums[2] = 1 + 1 = 2
     * - nums[(2 * 2) = 4] = nums[2] = 1
     * - nums[(2 * 2) + 1 = 5] = nums[2] + nums[3] = 1 + 2 = 3
     * - nums[(3 * 2) = 6] = nums[3] = 2
     * - nums[(3 * 2) + 1 = 7] = nums[3] + nums[4] = 2 + 1 = 3
     * Hence, nums = [0,1,1,2,1,3,2,3], and 
     * the maximum is max(0,1,1,2,1,3,2,3) = 3
     * 
     * Input: n = 2
     * Output: 1
     * Explanation: According to the given rules, nums = [0,1,1]. 
     * The maximum is max(0,1,1) = 1
     * 
     * Input: n = 3
     * Output: 2
     * Explanation: According to the given rules, nums = [0,1,1,2]. 
     * The maximum is max(0,1,1,2) = 2
     * 
     * 
     * 
     * \param n
     * \return 
     */
    if (n <= 1) return n;
    vector<int> nums(n + 1);
    nums[1] = 1;
    int maxNum = nums[1];
    for (int j = 2; j <= n; j++) {
        nums[j] = nums[j / 2] + nums[j / 2 + 1] * (j % 2);
        maxNum = max(maxNum, nums[j]);
    }
    return maxNum;
}
```

## Level Medium

### LeetCode0005 longest-palindromic-substring

```c++
string LeetCode0005::longestPalindrome(string s) {
    /**
     * Given a string s, return the longest palindromic substring in s..
     * 
     * https://leetcode-cn.com/problems/longest-palindromic-substring/
     * 
     * 1 <= s.length <= 1000
     * s consist of only digits and English letters
     * 
     * Example:
     * Input: s = "babad"
     * Output: "bab"
     * Explanation: "aba" is also a valid answer
     * 
     * Input: s = "cbbd"
     * Output: "bb"
     * 
     * Solutions:
     *		DP: 
     *		
     * 
     * \param s
     * \return 
     */
    int N = s.size();
    vector<vector<int>> P(N, vector<int>(N, 0));
    vector<int> longestPd(2);
    longestPd[1] = 1;

    for (int i = 0; i < N; ++i) {
        P[i][i] = 1;
        if (i + 1 < N && s[i] == s[i + 1]) {
            P[i][i+1] = 1;
            if (longestPd[1] < 2) {
                longestPd[0] = i;
                longestPd[1] = 2;
            }
        }
    }
    
    for (int l = 3; l <= N; ++l) {
        for (int i = 0; i < N-l+1; ++i) {
            if (s[i] == s[i + l - 1] && P[i+1][i + l - 2] == 1) {
                P[i][i + l - 1] = 1;
                if (longestPd[1] < l) {
                    longestPd[0] = i;
                    longestPd[1] = l;
                }
            }
        }
    }
    return s.substr(longestPd[0], longestPd[1]);
}
```

### LeetCode0022 括号生成

```c++
class Solution {
public:   
    void dfs(vector<string>& ans, const string& str, int right, int tot){
        if(tot == 0 && right == 0){
            ans.emplace_back(str);
            return;
        }
        if(tot)dfs(ans, str+'(', right + 1, tot - 1);
        if(right)dfs(ans, str+')', right - 1, tot);
    }
    LeetCode0022:: vector<string> generateParenthesis(int n) {
        vector<string> ans;
        dfs(ans, "", 0, n);
        return ans;
    }
};
```

