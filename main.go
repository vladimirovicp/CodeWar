package main

import "fmt"

func main() {
	var R [20][20]float64
	var T [20]float64
	var Q [20]float64
	for i := 0; i < 20; i++ {
		for j := 0; j < 20; j++ {
			R[i][j] = float64(i + j)
		}
	}
	for i := 0; i < 20; i++ {
		T[i] = float64(i)
	}

	//composit
	for i := 0; i < 20; i++ {
		sum := 0.0
		for j := 0; j < 20; j++ {
			sum = sum + R[i][j]
		}
		Q[i] = sum * T[i]
	}
	fmt.Println("Matrix:")
	for i := 0; i < 20; i++ {
		for j := 0; j < 20; j++ {
			fmt.Print(R[i][j])
			fmt.Print("  ")
		}
		fmt.Println()
	}
	fmt.Println("Vector:")
	for i := 0; i < 20; i++ {
		fmt.Print(T[i])
		fmt.Print("  ")
	}
	fmt.Println("\nResult:")
	for i := 0; i < 20; i++ {
		fmt.Print(Q[i])
		fmt.Print("  ")
	}

	com := 1.0

	for i := 0; i < 20; i++ {
		com = com * (Q[i] + Q[19-i])
	}
	fmt.Println()
	fmt.Println(com)
}
