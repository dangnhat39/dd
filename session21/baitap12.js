for (let i = 0; i < 10; i++) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    console.log(`%cMàu ngẫu nhiên ${i + 1}`, `color: rgb(${r},${g},${b})`);
}