const fs = require('fs');
const { performance } = require('perf_hooks');

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

const inputFile = "C:\\Users\\Usuario\\Downloads\\arq.txt";        
const outputFile = "ordenadoSelection.txt";  

try {
    const data = fs.readFileSync(inputFile, 'utf8');
    const numbers = data.split(/\r?\n/)
                        .filter(l => l.trim() !== "")
                        .map(Number);
    
    const start = performance.now();
    const memoryBefore = process.memoryUsage().heapUsed;                    
    selectionSort(numbers);
    const end = performance.now();
    const memoryAfter = process.memoryUsage().heapUsed;

    fs.writeFileSync(outputFile, numbers.join('\n'));

    
    console.log(`Tempo de execução: ${(end - start) / 1000} segundos`);
    console.log(`Memória usada: ${((memoryAfter - memoryBefore) / 1024 / 1024).toFixed(3)} MB`);
    console.log(`Arquivo salvo em: ${outputFile}`);
    console.log("Hardware utilizado: i5 10400f + 8gb Ram DDR4 + H510 + GTX 1660 + SSD SATA III");
} catch (err) {
    console.error("Erro:", err.message);
}