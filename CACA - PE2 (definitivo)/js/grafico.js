let graficoDesenhado = false; 
const seccaoEstatisticas = document.getElementById("estatisticas");

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
        
        const svg = d3.select("#d3-container")
                        .append("svg")
                        .attr("width", 320)
                        .attr("height", 260);

        const valorHover = svg.append("text")
                                .attr("x", 160)
                                .attr("y", 25)
                                .attr("text-anchor", "middle")
                                .attr("fill", "#002169")
                                .attr("font-size", "1.5em")
                                .attr("font-weight", "bold")
                                .style("opacity", 0);

        svg.selectAll("rect")
            .data(dados)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 105) 
            .attr("y", 200)               
            .attr("width", 85)            
            .attr("fill", "#002169")
            .style("cursor", "pointer")
            // touchstart
            .on("mouseover touchstart", function(event, d) {
                // Impede o ecrã de tentar fazer scroll ou zoom ao tocar na barra
                event.preventDefault(); 
                
                d3.select(this).attr("fill", "#21438D"); 
                valorHover.text(d.valor + " Investigadores").transition().duration(200).style("opacity", 1);
            })
            //touchend
            .on("mouseout touchend", function() {
                d3.select(this).attr("fill", "#002169"); 
                valorHover.transition().duration(200).style("opacity", 0);
            })
            .transition()                 
            .duration(1500)
            .attr("y", d => 200 - (d.valor * 2.5)) 
            .attr("height", d => d.valor * 2.5);
            
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