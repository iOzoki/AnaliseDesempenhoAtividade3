import static EstruturaDeDados.SelectionSort.selectionSort;
import java.io.*;
import java.util.*;

public class MainToSelect {
    public static void main(String[] args) {
        String inputFile = "C:\\Users\\Usuario\\Downloads\\arq.txt"; // ajuste aqui
        String outputFile = "ordenado_selection.txt";

         // memória usada antes


        try {
             // ⏱ início do tempo
            List<Integer> numeros = new ArrayList<>();

            // Leitura de todos os números do arquivo
            try (BufferedReader reader = new BufferedReader(new FileReader(inputFile))) {
                String linha;
                while ((linha = reader.readLine()) != null) {
                    if (!linha.trim().isEmpty()) {
                        numeros.add(Integer.parseInt(linha.trim().replace("\uFEFF", "")));
                    }
                }
            }

            long memoryBefore = Runtime.getRuntime().totalMemory() - Runtime.getRuntime().freeMemory();
            long startTime = System.nanoTime();
            int[] array = numeros.stream().mapToInt(Integer::intValue).toArray();
            selectionSort(array);
            long endTime = System.nanoTime();
            double seconds = (endTime - startTime) / 1_000_000_000.0;
            long memoryAfter = Runtime.getRuntime().totalMemory() - Runtime.getRuntime().freeMemory();
            double memoryUsedMB = (memoryAfter - memoryBefore) / (1024.0 * 1024.0);

            System.out.printf("Tempo de execução: %.3f segundos%n", seconds);
            System.out.printf("Memória usada: %.3f MB%n", memoryUsedMB);


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

        // 🖨️ Exibição dos resultados

        System.out.println("Arquivo salvo em: " + outputFile);
        System.out.println("\"Hardware utilizado: i5 10400f + 8gb Ram DDR4 + H510 + GTX 1660 + SSD SATA III\"");
    }
}