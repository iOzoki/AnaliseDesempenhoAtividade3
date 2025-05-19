const fs = require('fs');
const { performance } = require('perf_hooks');

function bubbleSort(arr) {
    let n = arr.length;
    let trocou;

    do {
        trocou = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                trocou = true;
            }
        }
        n--; 
    } while (trocou);

    return arr;
}

const inputFile = "C:\\Users\\Usuario\\Downloads\\arq.txt";        
const outputFile = "ordenadoBubble.txt";  




try {
    const data = fs.readFileSync(inputFile, 'utf8');
    const numbers = data.split(/\r?\n/)
                        .filter(l => l.trim() !== "")
                        .map(Number);
    const memoryBefore = process.memoryUsage().heapUsed;
    const start = performance.now();
    bubbleSort(numbers);
    const end = performance.now();
    const memoryAfter = process.memoryUsage().heapUsed;
    const memoryUsedMB = Math.abs((memoryAfter - memoryBefore) / 1024 / 1024);

    fs.writeFileSync(outputFile, numbers.join('\n'));

    console.log(`Tempo de execução: ${(end - start) / 1000} segundos`);
    console.log(`Memória usada: ${memoryUsedMB.toFixed(3)} MB`);
    console.log(`Arquivo salvo em: ${outputFile}`);
    console.log("Hardware utilizado: i5 10400f + 8gb Ram DDR4 + H510 + GTX 1660 + SSD SATA III");
} catch (err) {
    console.error("Erro:", err.message);
}