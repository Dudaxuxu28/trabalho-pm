
function mostrarDica() {
    const dicas = [
        "Leia uma história por dia e anote palavras novas!",
        "Tente usar novas palavras em frases curtas.",
        "Repita as histórias em voz alta para treinar a pronúncia.",
        "Use o dicionário sempre que não souber uma palavra."
    ];
    
    const dicaSorteada = dicas[Math.floor(Math.random() * dicas.length)];
    document.getElementById("dica").innerText = dicaSorteada;
}
