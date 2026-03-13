let graficoDesenhado = false; 
const seccaoEstatisticas = document.getElementById("estatisticas");

// Desenha o gráfico interativo D3.js apenas quando o utilizador chega a esta secção
function desenharGrafico() {
    const posicaoSecao = seccaoEstatisticas.getBoundingClientRect().top;
    const alturaEcra = window.innerHeight;
    
    const dados = [
            { area: "Cardiologia", valor: 45 },
            { area: "Neurociências", valor: 32 },
            { area: "Genética", valor: 58 }
        ];

    if (posicaoSecao < alturaEcra && !graficoDesenhado) {
        graficoDesenhado = true; 
        
        // Inicializa o SVG
        const svg = d3.select("#d3-container")
                        .append("svg")
                        .attr("width", 320)
                        .attr("height", 260);

        // Prepara o texto do Tooltip (invisível inicialmente)
        const valorHover = svg.append("text")
                                .attr("x", 160)
                                .attr("y", 25)
                                .attr("text-anchor", "middle")
                                .attr("fill", "#002169")
                                .attr("font-size", "1.5em")
                                .attr("font-weight", "bold")
                                .style("opacity", 0);

        // Desenha as barras e gere a interatividade (hover)
        svg.selectAll("rect")
            .data(dados)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 105) 
            .attr("y", 200)               
            .attr("width", 85)            
            .attr("fill", "#002169")
            .style("cursor", "pointer")
            .on("mouseover", function(event, d) {
                d3.select(this).attr("fill", "#21438D"); // Destaca a barra
                valorHover.text(d.valor + " Investigadores").transition().duration(200).style("opacity", 1);
            })
            .on("mouseout", function() {
                d3.select(this).attr("fill", "#002169"); // Restaura a cor
                valorHover.transition().duration(200).style("opacity", 0);
            })
            .transition() // Animação de crescimento               
            .duration(1500)
            .attr("y", d => 200 - (d.valor * 2.5)) 
            .attr("height", d => d.valor * 2.5);
            
        // Adiciona os nomes das áreas na base do gráfico
        svg.selectAll(".label-area")
            .data(dados)
            .enter()
            .append("text")
            .attr("class", "label-area")
            .text(d => d.area)
            .attr("x", (d, i) => i * 105 + 42.5) 
            .attr("y", 225)                    
            .attr("text-anchor", "middle")
            .attr("fill", "#002169")
            .attr("font-weight", "bold")
            .style("font-size", "12px");
    }
}

window.addEventListener("scroll", desenharGrafico);