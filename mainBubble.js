const fs = require('fs');
const { performance } = require('perf_hooks');

function bubbleSort(arr) {
    let n = arr.length;
    let trocou;

    do {
        trocou = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Troca os elementos
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                trocou = true;
            }
        }
        n--; // Otimização: ignora o último elemento já ordenado
    } while (trocou);

    return arr;
}

const inputFile = "C:\\Users\\isaac\\Downloads\\arq.txt";        // <--- Altere aqui
const outputFile = "ordenadoBubble.txt";  // <--- Altere aqui

const start = performance.now();
const memoryBefore = process.memoryUsage().heapUsed;

try {
    const data = fs.readFileSync(inputFile, 'utf8');
    const numbers = data.split(/\r?\n/)
                        .filter(l => l.trim() !== "")
                        .map(Number);

    bubbleSort(numbers);

    fs.writeFileSync(outputFile, numbers.join('\n'));

    const end = performance.now();
    const memoryAfter = process.memoryUsage().heapUsed;

    console.log(`Tempo de execução: ${(end - start) / 1000} segundos`);
    console.log(`Memória usada: ${((memoryAfter - memoryBefore) / 1024 / 1024).toFixed(3)} MB`);
    console.log(`Arquivo salvo em: ${outputFile}`);
} catch (err) {
    console.error("Erro:", err.message);
}
