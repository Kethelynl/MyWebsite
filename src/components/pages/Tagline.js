import React from 'react';
import { useInView } from 'react-intersection-observer'; // Para o efeito de scroll

const TimelineItem = ({ item }) => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5, // O item aparecerá quando estiver 50% visível
    });

    return (
        <div className='timeline-container'>
            <div
            ref={ref} // A referência está corretamente aplicada à div
            className={`timeline-item ${inView ? 'in-view' : ''}`} // Adicionando a classe 'in-view' quando o item entra em vista
            >
                <div className="timeline-dot">
                    <img src={item.image} alt="imagem" className="timeline-image" />
                </div>
                <div className="timeline-content">
                    <h3>{item.date}</h3>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                </div>
            </div>
        </div>
    );
};

const Tagline = ({ timeline }) => {
    return (
        <div className="timeline" id='Journey'>
            <div className="timeline-line"></div> {/* Linha vertical */}
            {timeline.map((item) => (
                <TimelineItem key={item.key} item={item} /> // Passando item para o componente TimelineItem
            ))}
        </div>
    );
};

export default Tagline;
