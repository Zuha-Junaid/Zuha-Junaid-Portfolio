// --- 1. THREE.JS VECTOR BACKGROUND INITIALIZATION ---
const container = document.getElementById('canvas-container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
container.appendChild(renderer.domElement);

const particleGeometry = new THREE.BufferGeometry();
const particleCount = 1200;
const coordinateArrays = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount * 3; i++) {
    coordinateArrays[i] = (Math.random() - 0.5) * 12;
}
particleGeometry.setAttribute('position', new THREE.BufferAttribute(coordinateArrays, 3));

const particleMaterial = new THREE.PointsMaterial({
    size: 0.016,
    color: '#0284c7', 
    transparent: true,
    opacity: 0.35,
    blending: THREE.NormalBlending
});

const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
scene.add(particleSystem);
camera.position.z = 4;

let xMouse = 0, yMouse = 0;
document.addEventListener('mousemove', (event) => {
    xMouse = (event.clientX / window.innerWidth) - 0.5;
    yMouse = (event.clientY / window.innerHeight) - 0.5;
});

const clock = new THREE.Clock();
const renderLoop = () => {
    const timeDelta = clock.getElapsedTime();
    particleSystem.rotation.y = timeDelta * 0.008;
    particleSystem.rotation.x += (yMouse * 0.15 - particleSystem.rotation.x) * 0.05;
    particleSystem.rotation.y += (xMouse * 0.15 - particleSystem.rotation.y) * 0.05;

    renderer.render(scene, camera);
    window.requestAnimationFrame(renderLoop);
};
renderLoop();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});


// --- 2. HIGH PERFORMANCE 2D VECTOR SCROLL CONTROLLER ---
const visibleSections = document.querySelectorAll('.section');

const update3DTextTransforms = () => {
    const currentScrollY = window.pageYOffset;
    const viewportHeight = window.innerHeight;

    visibleSections.forEach(section => {
        const textTarget = section.querySelector('.scroll-word-3d');
        if (!textTarget) return;

        const secTopPos = section.offsetTop;
        const sectionScrollProgress = currentScrollY - secTopPos;
        const progressionRatio = sectionScrollProgress / viewportHeight;

        // Visual fade metric calculation
        const dynamicAlpha = 1 - Math.abs(progressionRatio) * 1.4;

        // Processes right and left tracking targets on clear native matrix pipelines
        if (textTarget.classList.contains('word-top-right') || textTarget.classList.contains('word-bottom-right')) {
            const rotation = progressionRatio * -8; 
            const translationX = progressionRatio * -50; 
            textTarget.style.transform = `translateX(${translationX}px) rotate(${rotation}deg)`;
        } else if (textTarget.classList.contains('word-bottom-left')) {
            const rotation = progressionRatio * 8;  
            const translationX = progressionRatio * 50;   
            textTarget.style.transform = `translateX(${translationX}px) rotate(${rotation}deg)`;
        }

        textTarget.style.opacity = Math.max(0, Math.min(1, dynamicAlpha));
    });
};

window.addEventListener('scroll', update3DTextTransforms);
window.addEventListener('DOMContentLoaded', update3DTextTransforms);
update3DTextTransforms();