const musicManager = {
  'audio': null,
  'isPlaying': false,
  'init'() {
    this.audio = new Audio("Alejandro Sanz.mp3");
    this.audio.loop = true;
    this.audio.volume = 0.7;
    this.audio.preload = "auto";
    this.audio.setAttribute("playsinline", '');
    this.audio.onplay = () => {
      this.isPlaying = true;
      this.updateUI();
    };
    this.audio.onpause = () => {
      this.isPlaying = false;
      this.updateUI();
    };
    document.addEventListener("click", () => {
      if (!this.isPlaying) {
        this.audio.play()["catch"](_0x13d798 => {
          console.warn("No se puede reproducir la música:", _0x13d798);
        });
      }
    }, {
      'once': true
    });
    this.updateUI();
  },
  'togglePlayback'() {
    if (!this.audio) {
      return;
    }
    if (this.audio.paused) {
      this.audio.play()['catch'](_0xb8a46a => {
        console.warn("Error al reproducir música:", _0xb8a46a);
      });
    } else {
      this.audio.pause();
    }
  },
  'updateUI'() {
    const _0x178346 = document.getElementById('audio-icon');
    if (this.isPlaying) {
      _0x178346.classList.remove('fa-volume-xmark');
      _0x178346.classList.add("fa-volume-high");
    } else {
      _0x178346.classList.remove('fa-volume-high');
      _0x178346.classList.add("fa-volume-xmark");
    }
  }
};
document.addEventListener("DOMContentLoaded", () => {
  musicManager.init();
  document.getElementById("toggle-audio").addEventListener("click", () => {
    musicManager.togglePlayback();
  });
});
import * as _0x275f13 from 'three';
import {
  OrbitControls
} from 'three/addons/controls/OrbitControls.js';
import 'three/examples/jsm/loaders/FontLoader.js';
import 'three/examples/jsm/geometries/TextGeometry.js';
const scene = new _0x275f13.Scene();
scene.fog = new _0x275f13.FogExp2(0x0, 0.0015);
const camera = new _0x275f13.PerspectiveCamera(0x4b, window.innerWidth / window.innerHeight, 0.1, 0x186a0);
camera.position.set(0x0, 0x14, 0x1e);
const renderer = new _0x275f13.WebGLRenderer({
  'antialias': true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 0x2));
renderer.outputColorSpace = _0x275f13.SRGBColorSpace;
document.getElementById("container").appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.2;
controls.enabled = false;
controls.target.set(0x0, 0x0, 0x0);
controls.enablePan = false;
controls.minDistance = 0xf;
controls.maxDistance = 0x12c;
controls.zoomSpeed = 0.3;
controls.rotateSpeed = 0.3;
controls.update();

function createGlowMaterial(_0x2f8802, _0x44755c = 0x80, _0x35d7c7 = 0.55) {
  const _0x4d576a = document.createElement("canvas");
  _0x4d576a.width = _0x4d576a.height = _0x44755c;
  const _0x1f56ab = _0x4d576a.getContext('2d');
  const _0x285973 = _0x1f56ab.createRadialGradient(_0x44755c / 0x2, _0x44755c / 0x2, 0x0, _0x44755c / 0x2, _0x44755c / 0x2, _0x44755c / 0x2);
  _0x285973.addColorStop(0x0, _0x2f8802);
  _0x285973.addColorStop(0x1, 'rgba(0,0,0,0)');
  _0x1f56ab.fillStyle = _0x285973;
  _0x1f56ab.fillRect(0x0, 0x0, _0x44755c, _0x44755c);
  const _0x386cb5 = new _0x275f13.CanvasTexture(_0x4d576a);
  const _0x17be30 = new _0x275f13.SpriteMaterial({
    'map': _0x386cb5,
    'transparent': true,
    'opacity': _0x35d7c7,
    'depthWrite': false,
    'blending': _0x275f13.AdditiveBlending
  });
  return new _0x275f13.Sprite(_0x17be30);
}
for (let i = 0x0; i < 0xf; i++) {
  const hue = Math.random() * 0x168;
  const color = "hsla(" + hue + ", 80%, 50%, 0.6)";
  const nebula = createGlowMaterial(color, 0x100);
  nebula.scale.set(0x64, 0x64, 0x1);
  nebula.position.set((Math.random() - 0.5) * 0xaf, (Math.random() - 0.5) * 0xaf, (Math.random() - 0.5) * 0xaf);
  scene.add(nebula);
}
const galaxyParameters = {
  'count': 0x186a0,
  'arms': 0x6,
  'radius': 0x64,
  'spin': 0.5,
  'randomness': 0.2,
  'randomnessPower': 0x14,
  'insideColor': new _0x275f13.Color(0xd63ed6),
  'outsideColor': new _0x275f13.Color(0x48b8b8)
};

function getHeartImagesFromURL() {
  const _0x3a40c1 = new URLSearchParams(window.location.search);
  const _0x6fb5a7 = _0x3a40c1.get("images");
  if (_0x6fb5a7) {
    const _0x4279fd = decodeURIComponent(_0x6fb5a7);
    const _0x21433b = _0x4279fd.split(',').map(_0x41cf75 => _0x41cf75.trim()).filter(Boolean);
    return _0x21433b;
  }
  return null;
}
const heartImages = ['1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png','9.png','10.png','11.png','12.png','13.png','14.png','15.png','16.png','17.png','18.png','19.png','20.png','21.png','22.png','23.png','24.png','25.png','26.png','27.png','28.png','29.png','30.png','31.png','32.png','33.png','34.png','35.png','36.png','37.png','38.png','39.png','40.png','41.png','42.png','43.png','44.png','45.png','46.png','47.png','48.png','49.png','50.png','51.png','52.png','53.png','54.png','55.png','56.png','57.png','58.png','59.png','60.png','61.png' ];
document.addEventListener('DOMContentLoaded', () => {
  if (getHeartImagesFromURL()) {
    const _0x287a1 = document.getElementById('image-input-container');
    if (_0x287a1) {
      _0x287a1.style.display = "none";
    }
  }
  const _0x231e4d = document.getElementById("generate-link");
  _0x231e4d?.["addEventListener"]('click', () => {
    const _0x1d701c = document.getElementById('image-links').value.trim();
    if (!_0x1d701c) {
      alert("Bạn chưa nhập link ảnh.");
      return;
    }
    const _0x214235 = _0x1d701c.split(',').map(_0x5a41b5 => _0x5a41b5.trim()).filter(Boolean);
    const _0x23798d = encodeURIComponent(_0x214235.join(','));
    const _0x9cb9a0 = '' + window.location.origin + window.location.pathname + "?images=" + _0x23798d;
    navigator.clipboard.writeText(_0x9cb9a0).then(() => {
      alert("Đã tạo và sao chép link:\n" + _0x9cb9a0);
    })["catch"](_0x256015 => {
      console.error("Không thể sao chép:", _0x256015);
      alert("Đã tạo link nhưng không thể sao chép. Bạn có thể copy thủ công:\n" + _0x9cb9a0);
    });
  });
});
const numGroups = heartImages.length;
let pointsPerGroup;
if (numGroups <= 0x1) {
  pointsPerGroup = 0x3a98;
} else {
  if (numGroups >= 0x6) {
    pointsPerGroup = 0xfa0;
  } else {
    const t = (numGroups - 0x1) / 5;
    pointsPerGroup = Math.floor(0x3a98 * (0x1 - t) + 0xfa0 * t);
  }
}
if (pointsPerGroup * numGroups > 0x186a0) {
  pointsPerGroup = Math.floor(0x186a0 / numGroups);
}
console.log("Número de imágenes: " + numGroups + ", Puntos por imagen: " + pointsPerGroup);
const positions = new Float32Array(300000);
const colors = new Float32Array(300000);
let pointIdx = 0x0;
for (let i = 0x0; i < 0x186a0; i++) {
  const radius = Math.pow(Math.random(), 0x14) * 0x64;
  const branchAngle = i % 0x6 / 0x6 * Math.PI * 0x2;
  const spinAngle = radius * 0.5;
  const randomX = (Math.random() - 0.5) * 0.2 * radius;
  const randomY = (Math.random() - 0.5) * 0.2 * radius * 0.5;
  const randomZ = (Math.random() - 0.5) * 0.2 * radius;
  const totalAngle = branchAngle + spinAngle;
  if (radius < 0x1e && Math.random() < 0.7) {
    continue;
  }
  const i3 = pointIdx * 0x3;
  positions[i3] = Math.cos(totalAngle) * radius + randomX;
  positions[i3 + 0x1] = randomY;
  positions[i3 + 0x2] = Math.sin(totalAngle) * radius + randomZ;
  const mixedColor = new _0x275f13.Color(0xff66ff);
  mixedColor.lerp(new _0x275f13.Color(0x66ffff), radius / 0x64);
  mixedColor.multiplyScalar(0.7 + 0.3 * Math.random());
  colors[i3] = mixedColor.r;
  colors[i3 + 0x1] = mixedColor.g;
  colors[i3 + 0x2] = mixedColor.b;
  pointIdx++;
}
const galaxyGeometry = new _0x275f13.BufferGeometry();
galaxyGeometry.setAttribute("position", new _0x275f13.BufferAttribute(positions.slice(0x0, pointIdx * 0x3), 0x3));
galaxyGeometry.setAttribute("color", new _0x275f13.BufferAttribute(colors.slice(0x0, pointIdx * 0x3), 0x3));
const galaxyMaterial = new _0x275f13.ShaderMaterial({
  'uniforms': {
    'uTime': {
      'value': 0x0
    },
    'uSize': {
      'value': 0x32 * renderer.getPixelRatio()
    },
    'uRippleTime': {
      'value': -0x1
    },
    'uRippleSpeed': {
      'value': 0x28
    },
    'uRippleWidth': {
      'value': 0x14
    }
  },
  'vertexShader': "\n        uniform float uSize;\n        uniform float uTime;\n        uniform float uRippleTime;\n        uniform float uRippleSpeed;\n        uniform float uRippleWidth;\n\n        varying vec3 vColor;\n\n        void main() {\n            // Lấy màu gốc từ geometry (giống hệt vertexColors: true)\n            vColor = color;\n\n            vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n\n            // ---- LOGIC HIỆU ỨNG GỢN SÓNG ----\n            if (uRippleTime > 0.0) {\n                float rippleRadius = (uTime - uRippleTime) * uRippleSpeed;\n                float particleDist = length(modelPosition.xyz);\n\n                float strength = 1.0 - smoothstep(rippleRadius - uRippleWidth, rippleRadius + uRippleWidth, particleDist);\n                strength *= smoothstep(rippleRadius + uRippleWidth, rippleRadius - uRippleWidth, particleDist);\n\n                if (strength > 0.0) {\n                    vColor += vec3(strength * 2.0); // Làm màu sáng hơn khi sóng đi qua\n                }\n            }\n\n            vec4 viewPosition = viewMatrix * modelPosition;\n            gl_Position = projectionMatrix * viewPosition;\n            // Dòng này làm cho các hạt nhỏ hơn khi ở xa, mô phỏng hành vi của PointsMaterial\n            gl_PointSize = uSize / -viewPosition.z;\n        }\n    ",
  'fragmentShader': "\n        varying vec3 vColor;\n        void main() {\n            // Làm cho các hạt có hình tròn thay vì hình vuông\n            float dist = length(gl_PointCoord - vec2(0.5));\n            if (dist > 0.5) discard;\n\n            gl_FragColor = vec4(vColor, 1.0);\n        }\n    ",
  'blending': _0x275f13.AdditiveBlending,
  'depthWrite': false,
  'transparent': true,
  'vertexColors': true
});
const galaxy = new _0x275f13.Points(galaxyGeometry, galaxyMaterial);
scene.add(galaxy);

function createNeonTexture(_0x3b740a, _0x1718cd) {
  const _0x2bbbbf = window.devicePixelRatio || 0x1;
  const _0x408cbe = document.createElement('canvas');
  _0x408cbe.width = _0x408cbe.height = _0x1718cd * _0x2bbbbf;
  _0x408cbe.style.width = _0x408cbe.style.height = _0x1718cd + 'px';
  const _0x4560d7 = _0x408cbe.getContext('2d');
  _0x4560d7.scale(_0x2bbbbf, _0x2bbbbf);
  const _0x1342c3 = _0x3b740a.width / _0x3b740a.height;
  let _0xf6e159;
  let _0x1681fc;
  let _0x1fa424;
  let _0x781b82;
  if (_0x1342c3 > 0x1) {
    _0xf6e159 = _0x1718cd;
    _0x1681fc = _0x1718cd / _0x1342c3;
    _0x1fa424 = 0x0;
    _0x781b82 = (_0x1718cd - _0x1681fc) / 0x2;
  } else {
    _0x1681fc = _0x1718cd;
    _0xf6e159 = _0x1718cd * _0x1342c3;
    _0x1fa424 = (_0x1718cd - _0xf6e159) / 0x2;
    _0x781b82 = 0x0;
  }
  _0x4560d7.clearRect(0x0, 0x0, _0x1718cd, _0x1718cd);
  const _0x10195c = _0x1718cd * 0.1;
  _0x4560d7.save();
  _0x4560d7.beginPath();
  _0x4560d7.moveTo(_0x1fa424 + _0x10195c, _0x781b82);
  _0x4560d7.lineTo(_0x1fa424 + _0xf6e159 - _0x10195c, _0x781b82);
  _0x4560d7.arcTo(_0x1fa424 + _0xf6e159, _0x781b82, _0x1fa424 + _0xf6e159, _0x781b82 + _0x10195c, _0x10195c);
  _0x4560d7.lineTo(_0x1fa424 + _0xf6e159, _0x781b82 + _0x1681fc - _0x10195c);
  _0x4560d7.arcTo(_0x1fa424 + _0xf6e159, _0x781b82 + _0x1681fc, _0x1fa424 + _0xf6e159 - _0x10195c, _0x781b82 + _0x1681fc, _0x10195c);
  _0x4560d7.lineTo(_0x1fa424 + _0x10195c, _0x781b82 + _0x1681fc);
  _0x4560d7.arcTo(_0x1fa424, _0x781b82 + _0x1681fc, _0x1fa424, _0x781b82 + _0x1681fc - _0x10195c, _0x10195c);
  _0x4560d7.lineTo(_0x1fa424, _0x781b82 + _0x10195c);
  _0x4560d7.arcTo(_0x1fa424, _0x781b82, _0x1fa424 + _0x10195c, _0x781b82, _0x10195c);
  _0x4560d7.closePath();
  _0x4560d7.clip();
  _0x4560d7.drawImage(_0x3b740a, _0x1fa424, _0x781b82, _0xf6e159, _0x1681fc);
  _0x4560d7.restore();
  const _0x1d24af = new _0x275f13.CanvasTexture(_0x408cbe);
  _0x1d24af.minFilter = _0x275f13.LinearFilter;
  _0x1d24af.magFilter = _0x275f13.LinearFilter;
  _0x1d24af.anisotropy = renderer.capabilities.getMaxAnisotropy();
  _0x1d24af.colorSpace = _0x275f13.SRGBColorSpace;
  return _0x1d24af;
}
for (let group = 0x0; group < numGroups; group++) {
  const groupPositions = new Float32Array(pointsPerGroup * 0x3);
  const groupColorsNear = new Float32Array(pointsPerGroup * 0x3);
  const groupColorsFar = new Float32Array(pointsPerGroup * 0x3);
  let validPointCount = 0x0;
  for (let i = 0x0; i < pointsPerGroup; i++) {
    const idx = validPointCount * 0x3;
    const globalIdx = group * pointsPerGroup + i;
    const radius = Math.pow(Math.random(), 0x14) * 0x64;
    if (radius < 0x1e) {
      continue;
    }
    const branchAngle = globalIdx % 0x6 / 0x6 * Math.PI * 0x2;
    const spinAngle = radius * 0.5;
    const randomX = (Math.random() - 0.5) * 0.2 * radius;
    const randomY = (Math.random() - 0.5) * 0.2 * radius * 0.5;
    const randomZ = (Math.random() - 0.5) * 0.2 * radius;
    const totalAngle = branchAngle + spinAngle;
    groupPositions[idx] = Math.cos(totalAngle) * radius + randomX;
    groupPositions[idx + 0x1] = randomY;
    groupPositions[idx + 0x2] = Math.sin(totalAngle) * radius + randomZ;
    const colorNear = new _0x275f13.Color(0xffffff);
    groupColorsNear[idx] = colorNear.r;
    groupColorsNear[idx + 0x1] = colorNear.g;
    groupColorsNear[idx + 0x2] = colorNear.b;
    const colorFar = galaxyParameters.insideColor.clone();
    colorFar.lerp(galaxyParameters.outsideColor, radius / 0x64);
    colorFar.multiplyScalar(0.7 + 0.3 * Math.random());
    groupColorsFar[idx] = colorFar.r;
    groupColorsFar[idx + 0x1] = colorFar.g;
    groupColorsFar[idx + 0x2] = colorFar.b;
    validPointCount++;
  }
  if (validPointCount === 0x0) {
    continue;
  }
  const groupGeometryNear = new _0x275f13.BufferGeometry();
  groupGeometryNear.setAttribute("position", new _0x275f13.BufferAttribute(groupPositions.slice(0x0, validPointCount * 0x3), 0x3));
  groupGeometryNear.setAttribute("color", new _0x275f13.BufferAttribute(groupColorsNear.slice(0x0, validPointCount * 0x3), 0x3));
  const groupGeometryFar = new _0x275f13.BufferGeometry();
  groupGeometryFar.setAttribute("position", new _0x275f13.BufferAttribute(groupPositions.slice(0x0, validPointCount * 0x3), 0x3));
  groupGeometryFar.setAttribute('color', new _0x275f13.BufferAttribute(groupColorsFar.slice(0x0, validPointCount * 0x3), 0x3));
  const posAttr = groupGeometryFar.getAttribute("position");
  let cx = 0x0;
  let cy = 0x0;
  let cz = 0x0;
  for (let i = 0x0; i < posAttr.count; i++) {
    cx += posAttr.getX(i);
    cy += posAttr.getY(i);
    cz += posAttr.getZ(i);
  }
  cx /= posAttr.count;
  cy /= posAttr.count;
  cz /= posAttr.count;
  groupGeometryNear.translate(-cx, -cy, -cz);
  groupGeometryFar.translate(-cx, -cy, -cz);
  const img = new window.Image();
  img.crossOrigin = 'Anonymous';
  img.src = heartImages[group];
  img.onload = () => {
    const _0x40c84a = createNeonTexture(img, 0x100);
    const _0x5cff9c = new _0x275f13.PointsMaterial({
      'size': 1.8,
      'map': _0x40c84a,
      'transparent': false,
      'alphaTest': 0.2,
      'depthWrite': true,
      'depthTest': true,
      'blending': _0x275f13.NormalBlending,
      'vertexColors': true
    });
    const _0x5e01cf = new _0x275f13.PointsMaterial({
      'size': 1.8,
      'map': _0x40c84a,
      'transparent': true,
      'alphaTest': 0.2,
      'depthWrite': false,
      'blending': _0x275f13.AdditiveBlending,
      'vertexColors': true
    });
    const _0x21c257 = new _0x275f13.Points(groupGeometryFar, _0x5e01cf);
    _0x21c257.position.set(cx, cy, cz);
    _0x21c257.userData.materialNear = _0x5cff9c;
    _0x21c257.userData.geometryNear = groupGeometryNear;
    _0x21c257.userData.materialFar = _0x5e01cf;
    _0x21c257.userData.geometryFar = groupGeometryFar;
    scene.add(_0x21c257);
  };
}
const ambientLight = new _0x275f13.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const starGeometry = new _0x275f13.BufferGeometry();
const starPositions = new Float32Array(60000);
for (let i = 0x0; i < 0x4e20; i++) {
  starPositions[i * 0x3] = (Math.random() - 0.5) * 0x384;
  starPositions[i * 0x3 + 0x1] = (Math.random() - 0.5) * 0x384;
  starPositions[i * 0x3 + 0x2] = (Math.random() - 0.5) * 0x384;
}
starGeometry.setAttribute("position", new _0x275f13.BufferAttribute(starPositions, 0x3));
const starMaterial = new _0x275f13.PointsMaterial({
  'color': 0xffffff,
  'size': 0.7,
  'transparent': true,
  'opacity': 0.7,
  'depthWrite': false
});
const starField = new _0x275f13.Points(starGeometry, starMaterial);
starField.name = "starfield";
starField.renderOrder = 0x3e7;
scene.add(starField);
let shootingStars = [];

function createShootingStar() {
  const trailLength = 100;
  const positions = new Float32Array(trailLength * 3);
  const alphas = new Float32Array(trailLength);
  const geometry = new _0x275f13.BufferGeometry();
  geometry.setAttribute('position', new _0x275f13.BufferAttribute(positions, 3));
  geometry.setAttribute('alpha', new _0x275f13.BufferAttribute(alphas, 1));
  const material = new _0x275f13.ShaderMaterial({
    uniforms: {
      color: {
        value: new _0x275f13.Color(0xffffff)
      }
    },
    vertexShader: `
            attribute float alpha;
            varying float vAlpha;
            void main() {
                vAlpha = alpha;
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = (1.0 - alpha) * 2.5 * (300.0 / -mvPosition.z);
                gl_Position = projectionMatrix * mvPosition;
            }
        `,
    fragmentShader: `
            uniform vec3 color;
            varying float vAlpha;
            void main() {
                float strength = pow(vAlpha, 2.0);
                if (strength < 0.01) discard;
                gl_FragColor = vec4(color, strength);
            }
        `,
    transparent: true,
    blending: _0x275f13.AdditiveBlending,
    depthWrite: false
  });
  const star = new _0x275f13.Points(geometry, material);
  star.userData = {
    curve: createRandomCurve(),
    progress: 0.0,
    speed: 0.002 + Math.random() * 0.0025,
    trailLength: trailLength,
    life: 0,
    maxLife: 500
  };
  const startPoint = star.userData.curve.getPoint(0);
  for (let i = 0; i < trailLength; i++) {
    positions[i * 3] = startPoint.x;
    positions[i * 3 + 1] = startPoint.y;
    positions[i * 3 + 2] = startPoint.z;
  }
  scene.add(star);
  shootingStars.push(star);
}

function createRandomCurve() {
  const _0x49dd1a = [];
  const _0x66bac8 = new _0x275f13.Vector3(-0xc8 + Math.random() * 0x64, -0x64 + Math.random() * 0xc8, -0x64 + Math.random() * 0xc8);
  const _0x3977c3 = new _0x275f13.Vector3(0x258 + Math.random() * 0xc8, _0x66bac8.y + (-0x64 + Math.random() * 0xc8), _0x66bac8.z + (-0x64 + Math.random() * 0xc8));
  const _0x5b831b = new _0x275f13.Vector3(_0x66bac8.x + 0xc8 + Math.random() * 0x64, _0x66bac8.y + (-0x32 + Math.random() * 0x64), _0x66bac8.z + (-0x32 + Math.random() * 0x64));
  const _0x247db0 = new _0x275f13.Vector3(_0x3977c3.x - 0xc8 + Math.random() * 0x64, _0x3977c3.y + (-0x32 + Math.random() * 0x64), _0x3977c3.z + (-0x32 + Math.random() * 0x64));
  _0x49dd1a.push(_0x66bac8, _0x5b831b, _0x247db0, _0x3977c3);
  return new _0x275f13.CubicBezierCurve3(_0x66bac8, _0x5b831b, _0x247db0, _0x3977c3);
}

const textureLoader = new _0x275f13.TextureLoader();
const planetTexture = textureLoader.load('textura.jpg', (texture) => {
    console.log('textura.png cargada con éxito');
}, undefined, (err) => {
    console.error('Error al cargar textura.jpg:', err);
});

const planetGeometry = new _0x275f13.SphereGeometry(6, 64, 64); 

const planetMaterial = new _0x275f13.MeshStandardMaterial({
    map: planetTexture,      
    metalness: 0.2,          
    roughness: 0.7,          
    emissive: 0x000000       
});

const planet = new _0x275f13.Mesh(planetGeometry, planetMaterial);
planet.position.set(0, 0, 0); 
scene.add(planet);

const pointLight = new _0x275f13.PointLight(0xffffff, 1.5, 300);
pointLight.position.set(0, 40, 60);
scene.add(pointLight);

const ringTexts = ['Pinky', ...(window.dataLove2Loveloom && window.dataLove2Loveloom.data.ringTexts ? window.dataLove2Loveloom.data.ringTexts : [])];

function createTextRings() {
  const _0x38a806 = ringTexts.length;
  window.textRings = [];
  for (let _0x51465e = 0x0; _0x51465e < _0x38a806; _0x51465e++) {
    const _0x4c3f93 = ringTexts[_0x51465e % ringTexts.length] + "   ";
    const _0x260e22 = 11 + _0x51465e * 0x5;

    function _0x2580ef(_0x2fd8ca) {
      const _0x4b5de8 = _0x2fd8ca.charCodeAt(0x0);
      if (_0x4b5de8 >= 0x4e00 && _0x4b5de8 <= 0x9fff || _0x4b5de8 >= 0x3040 && _0x4b5de8 <= 0x309f || _0x4b5de8 >= 0x30a0 && _0x4b5de8 <= 0x30ff || _0x4b5de8 >= 0xac00 && _0x4b5de8 <= 0xd7af) {
        return "cjk";
      } else {
        if (_0x4b5de8 >= 0x0 && _0x4b5de8 <= 0x7f) {
          return "latin";
        }
      }
      return "other";
    }
    let _0x4159be = {
      'cjk': 0x0,
      'latin': 0x0,
      'other': 0x0
    };
    for (let _0xf0eefa of _0x4c3f93) {
      _0x4159be[_0x2580ef(_0xf0eefa)]++;
    }
    const _0x220424 = _0x4c3f93.length;
    const _0x22e78b = 0x0 / _0x220424;
    let _0x589274 = {
      'fontScale': 0.75,
      'spacingScale': 1.1
    };
    if (_0x51465e === 0x0) {
      _0x589274.fontScale = 0.55;
      _0x589274.spacingScale = 0.9;
    } else if (_0x51465e === 0x1) {
      _0x589274.fontScale = 0.65;
      _0x589274.spacingScale = 0x1;
    }
    if (_0x22e78b > 0x0) {
      _0x589274.fontScale *= 0.9;
      _0x589274.spacingScale *= 1.1;
    }
    const _0x57725c = Math.max(0x78, 180);
    const _0x421196 = document.createElement("canvas");
    const _0xd17691 = _0x421196.getContext('2d');
    _0xd17691.font = "bold " + _0x57725c + "px Arial, sans-serif";
    let _0xe04d7e = ringTexts[_0x51465e % ringTexts.length];
    let _0x34b47f = _0xe04d7e + "   ";
    let _0x314c89 = _0xd17691.measureText(_0x34b47f).width;
    let _0x23fecd = 0x2 * Math.PI * _0x260e22 * 0xb4;
    let _0xdf42c3 = Math.ceil(_0x23fecd / _0x314c89);
    let _0x1f5a70 = '';
    for (let _0x1b8731 = 0x0; _0x1b8731 < _0xdf42c3; _0x1b8731++) {
      _0x1f5a70 += _0x34b47f;
    }
    let _0x16f1e7 = _0x314c89 * _0xdf42c3;
    if (_0x16f1e7 < 0x1 || !_0x1f5a70) {
      _0x1f5a70 = _0x34b47f;
      _0x16f1e7 = _0x314c89;
    }
    const _0x4c0841 = document.createElement("canvas");
    _0x4c0841.width = Math.ceil(Math.max(0x1, _0x16f1e7));
    _0x4c0841.height = 0xc8;
    const _0x511494 = _0x4c0841.getContext('2d');
    _0x511494.clearRect(0x0, 0x0, _0x4c0841.width, 0xc8);
    _0x511494.font = "bold " + _0x57725c + "px Arial, sans-serif";
    _0x511494.fillStyle = "white";
    _0x511494.textAlign = "left";
    _0x511494.textBaseline = "alphabetic";
    _0x511494.shadowColor = "#e0b3ff";
    _0x511494.shadowBlur = 0x18;
    _0x511494.lineWidth = 0x6;
    _0x511494.strokeStyle = "#fff";
    _0x511494.strokeText(_0x1f5a70, 0x0, 160);
    _0x511494.shadowColor = "#ffb3de";
    _0x511494.shadowBlur = 0x10;
    _0x511494.fillText(_0x1f5a70, 0x0, 160);
    const _0x44b314 = new _0x275f13.CanvasTexture(_0x4c0841);
    _0x44b314.wrapS = _0x275f13.RepeatWrapping;
    _0x44b314.repeat.x = _0x16f1e7 / _0x23fecd;
    _0x44b314.needsUpdate = true;
    const _0x462adf = new _0x275f13.CylinderGeometry(_0x260e22, _0x260e22, 0x1, 0x80, 0x1, true);
    const _0x4efa79 = new _0x275f13.MeshBasicMaterial({
      'map': _0x44b314,
      'transparent': true,
      'side': _0x275f13.DoubleSide,
      'alphaTest': 0.01
    });
    const _0x56b67e = new _0x275f13.Mesh(_0x462adf, _0x4efa79);
    _0x56b67e.position.set(0x0, 0x0, 0x0);
    _0x56b67e.rotation.y = Math.PI / 0x2;
    const _0xd57ff4 = new _0x275f13.Group();
    _0xd57ff4.add(_0x56b67e);
    _0xd57ff4.userData = {
      'ringRadius': _0x260e22,
      'angleOffset': 0.15 * Math.PI * 0.5,
      'speed': 0.008,
      'tiltSpeed': 0x0,
      'rollSpeed': 0x0,
      'pitchSpeed': 0x0,
      'tiltAmplitude': Math.PI / 0x3,
      'rollAmplitude': Math.PI / 0x6,
      'pitchAmplitude': Math.PI / 0x8,
      'tiltPhase': Math.PI * 0x2,
      'rollPhase': Math.PI * 0x2,
      'pitchPhase': Math.PI * 0x2,
      'isTextRing': true
    };
    const _0x901525 = _0x51465e / _0x38a806 * (Math.PI / 0x1);
    _0xd57ff4.rotation.x = _0x901525;
    scene.add(_0xd57ff4);
    window.textRings.push(_0xd57ff4);
  }
}
createTextRings();

function updateTextRingsRotation() {
  if (!window.textRings || !camera) {
    return;
  }
  window.textRings.forEach((_0x548077, _0x41f326) => {
    _0x548077.children.forEach(_0x4f7dde => {
      if (_0x4f7dde.userData.initialAngle !== undefined) {
        const _0x5813b4 = _0x4f7dde.userData.initialAngle + _0x548077.userData.angleOffset;
        const _0x2ff092 = Math.cos(_0x5813b4) * _0x4f7dde.userData.ringRadius;
        const _0x95979 = Math.sin(_0x5813b4) * _0x4f7dde.userData.ringRadius;
        _0x4f7dde.position.set(_0x2ff092, 0x0, _0x95979);
        const _0x225801 = new _0x275f13.Vector3();
        _0x4f7dde.getWorldPosition(_0x225801);
        const _0x16b0f9 = new _0x275f13.Vector3().subVectors(camera.position, _0x225801).normalize();
        const _0x382737 = Math.atan2(_0x16b0f9.x, _0x16b0f9.z);
        _0x4f7dde.rotation.y = _0x382737;
      }
    });
  });
}

function animatePlanetSystem() {
  if (window.textRings) {
    const _0x3f8519 = Date.now() * 0.001;
    window.textRings.forEach((_0x467a7a, _0x116daa) => {
      const _0x6cbdca = _0x467a7a.userData;
      _0x6cbdca.angleOffset += _0x6cbdca.speed;
      const _0x261d2a = Math.sin(_0x3f8519 * _0x6cbdca.tiltSpeed + _0x6cbdca.tiltPhase) * _0x6cbdca.tiltAmplitude;
      const _0x4a1286 = Math.cos(_0x3f8519 * _0x6cbdca.rollSpeed + _0x6cbdca.rollPhase) * _0x6cbdca.rollAmplitude;
      const _0x5042d7 = Math.sin(_0x3f8519 * _0x6cbdca.pitchSpeed + _0x6cbdca.pitchPhase) * _0x6cbdca.pitchAmplitude;
      _0x467a7a.rotation.x = _0x116daa / window.textRings.length * (Math.PI / 0x1) + _0x261d2a;
      _0x467a7a.rotation.z = _0x4a1286;
      _0x467a7a.rotation.y = _0x6cbdca.angleOffset + _0x5042d7;
      const _0xc7124b = Math.sin(_0x3f8519 * (_0x6cbdca.tiltSpeed * 0.7) + _0x6cbdca.tiltPhase) * 0.3;
      _0x467a7a.position.y = _0xc7124b;
      const _0x48c735 = (Math.sin(_0x3f8519 * 1.5 + _0x116daa) + 0x1) / 0x2;
      const _0x541a3f = _0x467a7a.children[0x0];
      if (_0x541a3f && _0x541a3f.material) {
        _0x541a3f.material.opacity = 0.7 + _0x48c735 * 0.3;
      }
    });
    updateTextRingsRotation();
  }
}
let fadeOpacity = 0.1;
let fadeInProgress = false;
let hintIcon;
let hintText;

function createHintIcon() {
  hintIcon = new _0x275f13.Group();
  hintIcon.name = 'hint-icon-group';
  scene.add(hintIcon);
  const _0x303567 = new _0x275f13.Group();
  const _0x308965 = new _0x275f13.Shape();
  _0x308965.moveTo(0x0, 0x0);
  _0x308965.lineTo(-0.30000000000000004, -1.0499999999999998);
  _0x308965.lineTo(-0.1875, -1.0499999999999998);
  _0x308965.lineTo(-0.375, -1.5);
  _0x308965.lineTo(0.375, -1.5);
  _0x308965.lineTo(0.1875, -1.0499999999999998);
  _0x308965.lineTo(0.30000000000000004, -1.0499999999999998);
  _0x308965.closePath();
  const _0x7ff399 = new _0x275f13.ShapeGeometry(_0x308965);
  const _0x33eb1a = new _0x275f13.MeshBasicMaterial({
    'color': 0xffffff,
    'side': _0x275f13.DoubleSide
  });
  const _0x571858 = new _0x275f13.Mesh(_0x7ff399, _0x33eb1a);
  const _0x2583e7 = new _0x275f13.ShapeGeometry(_0x308965);
  const _0x5a3ef9 = new _0x275f13.MeshBasicMaterial({
    'color': 0xffffff,
    'side': _0x275f13.DoubleSide
  });
  const _0x44ae6a = new _0x275f13.Mesh(_0x2583e7, _0x5a3ef9);
  _0x44ae6a.scale.set(0.8, 0.8, 0x1);
  _0x44ae6a.position.z = 0.01;
  _0x303567.add(_0x571858, _0x44ae6a);
  _0x303567.position.y = 0.75;
  _0x303567.rotation.x = Math.PI / 0x2;
  const _0x3b72f5 = new _0x275f13.RingGeometry(1.8, 0x2, 0x20);
  const _0x3e90f7 = new _0x275f13.MeshBasicMaterial({
    'color': 0xffffff,
    'side': _0x275f13.DoubleSide,
    'transparent': true,
    'opacity': 0.6
  });
  const _0x613afe = new _0x275f13.Mesh(_0x3b72f5, _0x3e90f7);
  _0x613afe.rotation.x = Math.PI / 0x2;
  hintIcon.userData.ringMesh = _0x613afe;
  hintIcon.add(_0x303567);
  hintIcon.add(_0x613afe);
  hintIcon.position.set(1.5, 1.5, 0xf);
  hintIcon.scale.set(0.8, 0.8, 0.8);
  hintIcon.lookAt(planet.position);
  hintIcon.userData.initialPosition = hintIcon.position.clone();
}

function animateHintIcon(_0x3d26c5) {
  if (!hintIcon) {
    return;
  }
  if (!introStarted) {
    hintIcon.visible = true;
    const _0x20b1bb = Math.sin(_0x3d26c5 * 2.5) * 1.5;
    const _0x4a7662 = new _0x275f13.Vector3();
    hintIcon.getWorldDirection(_0x4a7662);
    hintIcon.position.copy(hintIcon.userData.initialPosition).addScaledVector(_0x4a7662, -_0x20b1bb);
    const _0x14872b = hintIcon.userData.ringMesh;
    const _0x14d722 = 0x1 + Math.sin(_0x3d26c5 * 2.5) * 0.1;
    _0x14872b.scale.set(_0x14d722, _0x14d722, 0x1);
    _0x14872b.material.opacity = 0.5 + Math.sin(_0x3d26c5 * 2.5) * 0.2;
    if (hintText) {
      hintText.visible = true;
      hintText.material.opacity = 0.7 + Math.sin(_0x3d26c5 * 0x3) * 0.3;
      hintText.position.y = 0xf + Math.sin(_0x3d26c5 * 0x2) * 0.5;
      hintText.lookAt(camera.position);
    }
  } else {
    if (hintIcon) {
      hintIcon.visible = false;
    }
    if (hintText) {
      hintText.visible = false;
    }
  }
}

function animate() {
  requestAnimationFrame(animate);
  const _0x34a2bc = performance.now() * 0.001;
  animateHintIcon(_0x34a2bc);
  controls.update();
  if (fadeInProgress && fadeOpacity < 0x1) {
    fadeOpacity += 0.025;
    if (fadeOpacity > 0x1) {
      fadeOpacity = 0x1;
    }
  }
  if (!introStarted) {
    fadeOpacity = 0.1;
    scene.traverse(_0xce253c => {
      if (_0xce253c.name === "starfield") {
        if (_0xce253c.points && _0xce253c.material.opacity !== undefined) {
          _0xce253c.material.transparent = false;
          _0xce253c.material.opacity = 0x1;
        }
        return;
      }
      if (_0xce253c.userData.isTextRing || _0xce253c.parent && _0xce253c.parent.userData && _0xce253c.parent.userData.isTextRing) {
        if (_0xce253c.material && _0xce253c.material.opacity !== undefined) {
          _0xce253c.material.transparent = false;
          _0xce253c.material.opacity = 0x1;
        }
        if (_0xce253c.material && _0xce253c.material.color) {
          _0xce253c.material.color.set(0xffffff);
        }
      } else if (_0xce253c !== planet && _0xce253c.name !== "main-glow" && _0xce253c !== hintIcon && _0xce253c.type !== "Scene" && !_0xce253c.parent.isGroup) {
        if (_0xce253c.material && _0xce253c.material.opacity !== undefined) {
          _0xce253c.material.transparent = true;
          _0xce253c.material.opacity = 0.1;
        }
      }
    });
    planet.visible = true;
  } else {
    scene.traverse(_0x23cd39 => {
      if (!(_0x23cd39.userData.isTextRing || _0x23cd39.parent && _0x23cd39.parent.userData && _0x23cd39.parent.userData.isTextRing || _0x23cd39 === planet || _0x23cd39.name === "main-glow" || _0x23cd39.type === 'Scene')) {
        if (_0x23cd39.material && _0x23cd39.material.opacity !== undefined) {
          _0x23cd39.material.transparent = true;
          _0x23cd39.material.opacity = fadeOpacity;
        }
      } else if (_0x23cd39.material && _0x23cd39.material.opacity !== undefined) {
        _0x23cd39.material.opacity = 0x1;
        _0x23cd39.material.transparent = false;
      }
      if (_0x23cd39.material && _0x23cd39.material.color) {
        _0x23cd39.material.color.set(0xffffff);
      }
    });
  }
  for (let i = shootingStars.length - 1; i >= 0; i--) {
    const star = shootingStars[i];
    star.userData.life++;
    star.userData.progress += star.userData.speed;
    if (star.userData.progress > 1.0 || star.userData.life > star.userData.maxLife) {
      scene.remove(star);
      star.geometry.dispose();
      star.material.dispose();
      shootingStars.splice(i, 1);
      continue;
    }
    const positions = star.geometry.attributes.position.array;
    const alphas = star.geometry.attributes.alpha.array;
    const trailLength = star.userData.trailLength;
    const curve = star.userData.curve;
    for (let j = 0; j < trailLength; j++) {
      const pointProgress = star.userData.progress - (j / trailLength) * 0.1;
      if (pointProgress >= 0 && pointProgress <= 1) {
        const point = curve.getPoint(pointProgress);
        positions[j * 3] = point.x;
        positions[j * 3 + 1] = point.y;
        positions[j * 3 + 2] = point.z;
        alphas[j] = 1.0 - (j / trailLength);
      }
    }
    star.geometry.attributes.position.needsUpdate = true;
    star.geometry.attributes.alpha.needsUpdate = true;
  }
  if (shootingStars.length < 5 && Math.random() < 0.05) {
    createShootingStar();
  }
  scene.traverse(_0x279c1e => {
    if (_0x279c1e.isPoints && _0x279c1e.userData.materialNear && _0x279c1e.userData.materialFar) {
      const _0x49b28e = _0x279c1e.geometry.getAttribute("position");
      let _0x466d44 = false;
      for (let _0x48fc55 = 0x0; _0x48fc55 < _0x49b28e.count; _0x48fc55++) {
        const _0x45e6f1 = _0x49b28e.getX(_0x48fc55) + _0x279c1e.position.x;
        const _0x53568f = _0x49b28e.getY(_0x48fc55) + _0x279c1e.position.y;
        const _0x30a895 = _0x49b28e.getZ(_0x48fc55) + _0x279c1e.position.z;
        const _0x4dd6a8 = camera.position.distanceTo(new _0x275f13.Vector3(_0x45e6f1, _0x53568f, _0x30a895));
        if (_0x4dd6a8 < 0xa) {
          _0x466d44 = true;
          break;
        }
      }
      if (_0x466d44) {
        if (_0x279c1e.material !== _0x279c1e.userData.materialNear) {
          _0x279c1e.material = _0x279c1e.userData.materialNear;
          _0x279c1e.geometry = _0x279c1e.userData.geometryNear;
        }
      } else if (_0x279c1e.material !== _0x279c1e.userData.materialFar) {
        _0x279c1e.material = _0x279c1e.userData.materialFar;
        _0x279c1e.geometry = _0x279c1e.userData.geometryFar;
      }
    }
  });

  if (planet && planet.isMesh) {
    planet.rotation.y += 0.005; 
  }

  animatePlanetSystem();
  if (starField && starField.material && starField.material.opacity !== undefined) {
    starField.material.opacity = 0x1;
    starField.material.transparent = false;
  }
  renderer.render(scene, camera);
}

function createHintText() {
  const _0x5afb93 = document.createElement('canvas');
  _0x5afb93.width = _0x5afb93.height = 0x200;
  const _0x4c87c1 = _0x5afb93.getContext('2d');
  _0x4c87c1.font = "bold 50px Arial, sans-serif";
  _0x4c87c1.textAlign = 'center';
  _0x4c87c1.textBaseline = "middle";
  _0x4c87c1.shadowColor = "#ffb3de";
  _0x4c87c1.shadowBlur = 0x5;
  _0x4c87c1.lineWidth = 0x2;
  _0x4c87c1.strokeStyle = "rgba(255, 200, 220, 0.8)";
  _0x4c87c1.strokeText("Toca el Planeta", 256, 256);
  _0x4c87c1.shadowColor = '#e0b3ff';
  _0x4c87c1.shadowBlur = 0x5;
  _0x4c87c1.lineWidth = 0x2;
  _0x4c87c1.strokeStyle = "rgba(220, 180, 255, 0.5)";
  _0x4c87c1.strokeText("Toca el Planeta", 256, 256);
  _0x4c87c1.shadowColor = "transparent";
  _0x4c87c1.shadowBlur = 0x0;
  _0x4c87c1.fillStyle = "white";
  _0x4c87c1.fillText("Toca el Planeta", 256, 256);
  const _0x37587a = new _0x275f13.CanvasTexture(_0x5afb93);
  _0x37587a.needsUpdate = true;
  const _0x3371ab = new _0x275f13.MeshBasicMaterial({
    'map': _0x37587a,
    'transparent': true,
    'side': _0x275f13.DoubleSide
  });
  const _0x14c212 = new _0x275f13.PlaneGeometry(0x10, 0x8);
  hintText = new _0x275f13.Mesh(_0x14c212, _0x3371ab);
  hintText.position.set(0x0, 0xf, 0x0);
  scene.add(hintText);
}
createHintIcon();
createHintText();
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  controls.target.set(0x0, 0x0, 0x0);
  controls.update();
});

function startCameraAnimation() {
  const _0xed71fc = {
    'x': camera.position.x,
    'y': camera.position.y,
    'z': camera.position.z
  };
  const _0x12f7c3 = {
    'x': _0xed71fc.x,
    'y': 0x0,
    'z': _0xed71fc.z
  };
  const _0x11f0f3 = {
    'x': _0xed71fc.x,
    'y': 0x0,
    'z': 0xa0
  };
  const _0xcee8e = {
    'x': -0x28,
    'y': 0x64,
    'z': 0x64
  };
  let _0x360509 = 0x0;

  function _0x349f93() {
    _0x360509 += 0.00101;
    let _0x3015fe;
    if (_0x360509 < 0.2) {
      let _0x1142e7 = _0x360509 / 0.2;
      _0x3015fe = {
        'x': _0xed71fc.x + (_0x12f7c3.x - _0xed71fc.x) * _0x1142e7,
        'y': _0xed71fc.y + (0x0 - _0xed71fc.y) * _0x1142e7,
        'z': _0xed71fc.z + (_0x12f7c3.z - _0xed71fc.z) * _0x1142e7
      };
    } else {
      if (_0x360509 < 0.75) {
        let _0x5d83a8 = (_0x360509 - 0.2) / 0.55;
        _0x3015fe = {
          'x': _0x12f7c3.x + (_0x11f0f3.x - _0x12f7c3.x) * _0x5d83a8,
          'y': 0x0 + 0 * _0x5d83a8,
          'z': _0x12f7c3.z + (0xa0 - _0x12f7c3.z) * _0x5d83a8
        };
      } else {
        if (_0x360509 < 1.15) {
          let _0x28df9f = (_0x360509 - 0.2 - 0.55) / 0.4;
          let _0x251b94 = 0.5 - 0.5 * Math.cos(Math.PI * _0x28df9f);
          _0x3015fe = {
            'x': _0x11f0f3.x + (_0xcee8e.x - _0x11f0f3.x) * _0x251b94,
            'y': 0x0 + 100 * _0x251b94,
            'z': 0xa0 + -60 * _0x251b94
          };
        } else {
          camera.position.set(_0xcee8e.x, 0x64, 0x64);
          camera.lookAt(0x0, 0x0, 0x0);
          controls.target.set(0x0, 0x0, 0x0);
          controls.update();
          controls.enabled = true;
          return;
        }
      }
    }
    camera.position.set(_0x3015fe.x, _0x3015fe.y, _0x3015fe.z);
    camera.lookAt(0x0, 0x0, 0x0);
    requestAnimationFrame(_0x349f93);
  }
  controls.enabled = false;
  _0x349f93();
}
const raycaster = new _0x275f13.Raycaster();
const mouse = new _0x275f13.Vector2();
let introStarted = false;
const originalStarCount = starGeometry.getAttribute("position").count;
if (starField && starField.geometry) {
  starField.geometry.setDrawRange(0x0, Math.floor(originalStarCount * 0.1));
}

function requestFullScreen() {
  const _0x5a4ad7 = document.documentElement;
  if (_0x5a4ad7.requestFullscreen) {
    _0x5a4ad7.requestFullscreen();
  } else {
    if (_0x5a4ad7.mozRequestFullScreen) {
      _0x5a4ad7.mozRequestFullScreen();
    } else {
      if (_0x5a4ad7.webkitRequestFullscreen) {
        _0x5a4ad7.webkitRequestFullscreen();
      } else if (_0x5a4ad7.msRequestFullscreen) {
        _0x5a4ad7.msRequestFullscreen();
      }
    }
  }
}

function onCanvasClick(_0x575832) {
  if (introStarted) {
    return;
  }
  const _0x4af5b8 = renderer.domElement.getBoundingClientRect();
  mouse.x = (_0x575832.clientX - _0x4af5b8.left) / _0x4af5b8.width * 0x2 - 0x1;
  mouse.y = -((_0x575832.clientY - _0x4af5b8.top) / _0x4af5b8.height) * 0x2 + 0x1;
  raycaster.setFromCamera(mouse, camera);
  const _0x351d25 = raycaster.intersectObject(planet);
  if (_0x351d25.length > 0x0) {
    introStarted = true;
    fadeInProgress = true;
    document.body.classList.add('intro-started');
    startCameraAnimation();
    if (starField && starField.geometry) {
      starField.geometry.setDrawRange(0x0, originalStarCount);
    }
  } else {
    if (introStarted) {
      const _0x10fbb8 = raycaster.intersectObjects(heartPointClouds);
      if (_0x10fbb8.length > 0x0) {
        const _0x194f4e = _0x10fbb8[0x0].object;
        controls.target.copy(_0x194f4e.position);
      }
    }
  }
}
renderer.domElement.addEventListener("click", onCanvasClick);
animate();
planet.name = "main-planet";

function setFullScreen() {
  const _0x480ccb = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", _0x480ccb + 'px');
  const _0x4fd040 = document.getElementById('container');
  if (_0x4fd040) {
    _0x4fd040.style.height = window.innerHeight + 'px';
  }
}
window.addEventListener('resize', setFullScreen);
window.addEventListener("orientationchange", () => {
  setTimeout(setFullScreen, 0x12c);
});
setFullScreen();
const preventDefault = _0x37fa9a => _0x37fa9a.preventDefault();
document.addEventListener("touchmove", preventDefault, {
  'passive': false
});
document.addEventListener('gesturestart', preventDefault, {
  'passive': false
});
const container = document.getElementById("container");
if (container) {
  container.addEventListener('touchmove', preventDefault, {
    'passive': false
  });
}

function checkOrientation() {
  const _0x244abc = window.innerHeight > window.innerWidth && "ontouchstart" in window;
  if (_0x244abc) {
    document.body.classList.add("portrait-mode");
  } else {
    document.body.classList.remove("portrait-mode");
  }
}
window.addEventListener("DOMContentLoaded", checkOrientation);
window.addEventListener('resize', checkOrientation);
window.addEventListener("orientationchange", () => {
  setTimeout(checkOrientation, 0xc8);
});