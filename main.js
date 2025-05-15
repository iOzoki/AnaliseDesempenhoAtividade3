const fs = require('fs');
const { performance } = require('perf_hooks');

// Função de Selection Sort
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j;
        }
        if (min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
}

// Leitura e ordenação
const inputFile = "C:\\Users\\isaac\\Downloads\\arq.txt";        // <--- Altere aqui
const outputFile = "ordenadoSelection.txt";  // <--- Altere aqui

const start = performance.now();
const memoryBefore = process.memoryUsage().heapUsed;

try {
    const data = fs.readFileSync(inputFile, 'utf8');
    const numbers = data.split(/\r?\n/)
                        .filter(l => l.trim() !== "")
                        .map(Number);

    selectionSort(numbers);

    fs.writeFileSync(outputFile, numbers.join('\n'));

    const end = performance.now();
    const memoryAfter = process.memoryUsage().heapUsed;

    console.log(`Tempo de execução: ${(end - start) / 1000} segundos`);
    console.log(`Memória usada: ${((memoryAfter - memoryBefore) / 1024 / 1024).toFixed(3)} MB`);
    console.log(`Arquivo salvo em: ${outputFile}`);
    console.log("Hardware utilizado: i5 10400f + 8gb Ram DDR4 + H510 + GTX 1660 + SSD SATA III");
} catch (err) {
    console.error("Erro:", err.message);
}
