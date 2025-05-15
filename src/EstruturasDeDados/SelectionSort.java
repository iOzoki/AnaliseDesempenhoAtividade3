package EstruturasDeDados;

public class SelectionSort {

    public static int[] selectionSort(int[] array) {
        int n = array.length;

        for (int i = 0; i < n - 1; i++) {
            int indiceMinimo = i;

            // Encontra o menor elemento no restante do array
            for (int j = i + 1; j < n; j++) {
                if (array[j] < array[indiceMinimo]) {
                    indiceMinimo = j;
                }
            }

            // Troca o elemento atual com o menor encontrado
            int temp = array[i];
            array[i] = array[indiceMinimo];
            array[indiceMinimo] = temp;
        }

        return array;
    }

    // Exemplo de uso
    public static void main(String[] args) {
        int[] array = {64, 25, 12, 22, 11};
        int[] sorted = selectionSort(array);

        for (int num : sorted) {
            System.out.print(num + " ");
        }
    }
}
