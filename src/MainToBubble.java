import static EstruturasDeDados.BubbleSort.bubbleSort;

import java.io.*;
import java.util.*;

public class MainToBubble {
    public static void main(String[] args) {
        String inputFile = "C:\\Users\\isaac\\Downloads\\arq.txt"; // ajuste aqui
        String outputFile = "ordenado_bubble.txt";

        long startTime = System.nanoTime(); // ⏱ início do tempo
        long memoryBefore = Runtime.getRuntime().totalMemory() - Runtime.getRuntime().freeMemory(); // memória usada antes

        try {
            List<Integer> numeros = new ArrayList<>();

            // Leitura de todos os números do arquivo
            try (BufferedReader reader = new BufferedReader(new FileReader(inputFile))) {
                String linha;
                while ((linha = reader.readLine()) != null) {
                    if (!linha.trim().isEmpty()) {
                        numeros.add(Integer.parseInt(linha.trim()));
                    }
                }
            }

            // Converte para array e ordena
            int[] array = numeros.stream().mapToInt(Integer::intValue).toArray();
            bubbleSort(array);

            // Escreve no arquivo de saída (um número por linha)
            try (BufferedWriter writer = new BufferedWriter(new FileWriter(outputFile))) {
                for (int num : array) {
                    writer.write(String.valueOf(num));
                    writer.newLine();
                }
            }

            System.out.println("Arquivo ordenado com Selection Sort salvo em: " + outputFile);

        } catch (IOException e) {
            System.err.println("Erro ao processar o arquivo: " + e.getMessage());
        }

        long endTime = System.nanoTime();
        long memoryAfter = Runtime.getRuntime().totalMemory() - Runtime.getRuntime().freeMemory();
        double seconds = (endTime - startTime) / 1_000_000_000.0;
        double memoryUsedMB = (memoryAfter - memoryBefore) / (1024.0 * 1024.0);

        // 🖨️ Exibição dos resultados
        System.out.printf("Tempo de execução: %.3f segundos%n", seconds);
        System.out.printf("Memória usada: %.3f MB%n", memoryUsedMB);
        System.out.println("Arquivo salvo em: " + outputFile);
    }
}
