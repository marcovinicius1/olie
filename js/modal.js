const modal = document.getElementById('caseModal');
const modalTitle = modal.querySelector('.modal-title');
const modalDescription = modal.querySelector('.modal-description');
const modalDetails = modal.querySelector('.modal-details');
const modalImage = modal.querySelector('.modal-image');
const modalInstagram = modal.querySelector('.modal-instagram');
const closeBtn = modal.querySelector('.modal-close');

const cases = [
    {
        title: 'Entrevista Exclusiva',
        description: 'Bastidores de uma entrevista especial com insights incríveis!',
        image: 'assets/img/background-warp.jpg',
        modalImage: 'assets/img/polo-seguradora.jpg',
        details: 'Uma entrevista exclusiva que traz perspectivas únicas e insights valiosos sobre o tema em discussão. Nossa equipe capturou cada momento especial, garantindo que a essência da conversa fosse preservada.'
    },
    {
        title: 'Nos Bastidores',
        description: 'A preparação é essencial para um conteúdo de qualidade.',
        image: 'assets/img/background-warp2.jpg',
        modalImage: 'assets/img/polo-seguradora.jpg',
        details: 'O trabalho nos bastidores é fundamental para o sucesso de qualquer produção. Mostramos o processo de preparação e organização que garante a excelência do conteúdo final.'
    },
    {
        title: 'Consultoria Contábil',
        description: 'Vídeo para divulgação da consultoria contábil.',
        image: 'assets/img/background-warp3.jpg',
        modalImage: 'assets/img/vociem.jpg',
        details: 'Vídeos para reels e stories da consultoria contábil VOCIEM.'
    },
    {
        title: 'Fique por dentro!',
        description: 'Trazendo novidades e tendências para você.',
        image: 'assets/img/background-warp4.jpg',
        modalImage: 'assets/img/vociem.jpg',
        details: 'Mantenha-se atualizado com as últimas tendências e novidades do mercado. Nossa equipe está sempre atenta às mudanças e traz as informações mais relevantes para você.'
    },
    {
        title: 'Evoluções de Obra!',
        description: 'Fotos e videos aereos da evolução de obra.',
        image: 'assets/img/background-warp5.jpg',
        modalImage: 'assets/img/acl.jpg',
        details: 'Acompanhamento mensal, com imagens de drone da evolução de obra dos projetos da ACL Construtora.'
    },
    {
        title: 'Ensaio Corporativo.',
        description: 'Ensaio corporativo para a empresa Vociem.',
        image: 'assets/img/background-warp6.jpg',
        modalImage: 'assets/img/vociem.jpg',
        details: 'Fotos profissionais para criação de peças publicitárias.',
        instagramLink: 'https://www.instagram.com/vociem/'
    }
];

let hoverTimeout;
let isModalOpen = false;

function openModal(caseData) {
    modalTitle.textContent = caseData.title;
    modalDescription.textContent = caseData.description;
    modalDetails.textContent = caseData.details;
    modalImage.src = caseData.modalImage;
    
    if (caseData.instagramLink) {
        modalInstagram.innerHTML = `<a href="${caseData.instagramLink}" target="_blank">Siga no Instagram</a>`;
    } else {
        modalInstagram.innerHTML = '';
    }
    
    modal.classList.add('active');
    document.body.classList.add('modal-open');
    isModalOpen = true;
}

function closeModal() {
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
    isModalOpen = false;
}

document.querySelectorAll('.case-image').forEach((caseImage, index) => {
    caseImage.addEventListener('click', () => {
        openModal(cases[index]);
    });
});

// Only close modal when X button is clicked
closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    closeModal();
});

// Remove event listeners that automatically close the modal
// when mouse leaves modal or pressing Escape key

// Prevent modal from closing when clicking on the modal background
modal.addEventListener('click', (e) => {
    e.stopPropagation();
}); 