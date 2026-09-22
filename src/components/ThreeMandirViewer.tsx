import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export interface ThreeMandirViewerRef {
  toggleAutoRotate: () => boolean;
  resetView: () => void;
  rotateToAngle: (angleRad: number) => void;
  setMaterialFinish: (finish: 'teak' | 'sheesham' | 'rosewood') => void;
  setSanctumLED: (on: boolean) => void;
  toggleDiya: (on: boolean) => void;
}

interface ThreeMandirViewerProps {
  finish: 'teak' | 'sheesham' | 'rosewood';
  sanctumLedOn: boolean;
  diyaLit: boolean;
  autoRotate: boolean;
  onAutoRotateChange?: (rotating: boolean) => void;
}

export const ThreeMandirViewer = React.forwardRef<ThreeMandirViewerRef, ThreeMandirViewerProps>(
  ({ finish, sanctumLedOn, diyaLit, autoRotate, onAutoRotateChange }, ref) => {
    const mountRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<{
      scene: THREE.Scene;
      camera: THREE.PerspectiveCamera;
      renderer: THREE.WebGLRenderer;
      mandirGroup: THREE.Group;
      teakWoodMat: THREE.MeshStandardMaterial;
      darkTeakMat: THREE.MeshStandardMaterial;
      brassGoldMat: THREE.MeshStandardMaterial;
      glowingAltarMat: THREE.MeshStandardMaterial;
      diyaGlow: THREE.PointLight;
      diyaFlame: THREE.Mesh;
      sanctumLedDownlight: THREE.PointLight;
      jaaliBacklight: THREE.PointLight;
      ceilingLedBar: THREE.Mesh;
      backJaaliLedHalo: THREE.Mesh;
      autoRotateState: boolean;
      targetRotationY: number;
      targetRotationX: number;
      currentRotationY: number;
      currentRotationX: number;
      isDragging: boolean;
    } | null>(null);

    // Expose imperative methods through ref
    React.useImperativeHandle(ref, () => ({
      toggleAutoRotate: () => {
        if (!sceneRef.current) return false;
        sceneRef.current.autoRotateState = !sceneRef.current.autoRotateState;
        onAutoRotateChange?.(sceneRef.current.autoRotateState);
        return sceneRef.current.autoRotateState;
      },
      resetView: () => {
        if (!sceneRef.current) return;
        sceneRef.current.targetRotationY = 0.45;
        sceneRef.current.targetRotationX = 0.1;
        sceneRef.current.autoRotateState = true;
        onAutoRotateChange?.(true);
      },
      rotateToAngle: (angleRad: number) => {
        if (!sceneRef.current) return;
        sceneRef.current.targetRotationY = angleRad;
        sceneRef.current.targetRotationX = 0.08;
        sceneRef.current.autoRotateState = false;
        onAutoRotateChange?.(false);
      },
      setMaterialFinish: (newFinish: 'teak' | 'sheesham' | 'rosewood') => {
        if (!sceneRef.current) return;
        const { teakWoodMat, darkTeakMat } = sceneRef.current;
        if (newFinish === 'sheesham') {
          teakWoodMat.color.setHex(0x5c2b16);
          darkTeakMat.color.setHex(0x3a190c);
        } else if (newFinish === 'teak') {
          teakWoodMat.color.setHex(0x4a2a16);
          darkTeakMat.color.setHex(0x33190b);
        } else if (newFinish === 'rosewood') {
          teakWoodMat.color.setHex(0x2d1109);
          darkTeakMat.color.setHex(0x1a0703);
        }
      },
      setSanctumLED: (on: boolean) => {
        if (!sceneRef.current) return;
        sceneRef.current.sanctumLedDownlight.visible = on;
        sceneRef.current.jaaliBacklight.visible = on;
        sceneRef.current.ceilingLedBar.visible = on;
        sceneRef.current.backJaaliLedHalo.visible = on;
      },
      toggleDiya: (on: boolean) => {
        if (!sceneRef.current) return;
        sceneRef.current.diyaGlow.visible = on;
        sceneRef.current.diyaFlame.visible = on;
      }
    }));

    // Update finish when prop changes
    useEffect(() => {
      if (!sceneRef.current) return;
      const { teakWoodMat, darkTeakMat } = sceneRef.current;
      if (finish === 'sheesham') {
        teakWoodMat.color.setHex(0x5c2b16);
        darkTeakMat.color.setHex(0x3a190c);
      } else if (finish === 'teak') {
        teakWoodMat.color.setHex(0x4a2a16);
        darkTeakMat.color.setHex(0x33190b);
      } else if (finish === 'rosewood') {
        teakWoodMat.color.setHex(0x2d1109);
        darkTeakMat.color.setHex(0x1a0703);
      }
    }, [finish]);

    // Update LED state when prop changes
    useEffect(() => {
      if (!sceneRef.current) return;
      sceneRef.current.sanctumLedDownlight.visible = sanctumLedOn;
      sceneRef.current.jaaliBacklight.visible = sanctumLedOn;
      sceneRef.current.ceilingLedBar.visible = sanctumLedOn;
      sceneRef.current.backJaaliLedHalo.visible = sanctumLedOn;
    }, [sanctumLedOn]);

    // Update Diya state when prop changes
    useEffect(() => {
      if (!sceneRef.current) return;
      sceneRef.current.diyaGlow.visible = diyaLit;
      sceneRef.current.diyaFlame.visible = diyaLit;
    }, [diyaLit]);

    // Update auto rotate when prop changes
    useEffect(() => {
      if (!sceneRef.current) return;
      sceneRef.current.autoRotateState = autoRotate;
    }, [autoRotate]);

    useEffect(() => {
      const container = mountRef.current;
      if (!container) return;

      const width = container.clientWidth || 600;
      const height = container.clientHeight || 500;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
      camera.position.set(0, 1.8, 6.2);

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      container.appendChild(renderer.domElement);

      // Lights
      const ambientLight = new THREE.AmbientLight(0xfff3e0, 1.4);
      scene.add(ambientLight);

      const keyLight = new THREE.DirectionalLight(0xffedd5, 1.9);
      keyLight.position.set(5, 8, 5);
      keyLight.castShadow = true;
      keyLight.shadow.mapSize.width = 1024;
      keyLight.shadow.mapSize.height = 1024;
      scene.add(keyLight);

      const fillLight = new THREE.DirectionalLight(0xdbeafe, 0.7);
      fillLight.position.set(-5, 4, -4);
      scene.add(fillLight);

      // Warm Diya Sacred Sanctum Glow
      const diyaGlow = new THREE.PointLight(0xff9900, 2.6, 5.0, 1.8);
      diyaGlow.position.set(0, 0.3, 0.2);
      scene.add(diyaGlow);

      // Sanctum 2700K Cove Lighting
      const sanctumLedDownlight = new THREE.PointLight(0xffb84d, 3.2, 4.2, 1.6);
      sanctumLedDownlight.position.set(0, 1.05, 0.2);
      scene.add(sanctumLedDownlight);

      const jaaliBacklight = new THREE.PointLight(0xffaa22, 2.2, 3.0, 1.5);
      jaaliBacklight.position.set(0, 0.45, -0.65);
      scene.add(jaaliBacklight);

      // Materials
      const initialTeakColor = finish === 'sheesham' ? 0x5c2b16 : finish === 'rosewood' ? 0x2d1109 : 0x4a2a16;
      const initialDarkColor = finish === 'sheesham' ? 0x3a190c : finish === 'rosewood' ? 0x1a0703 : 0x33190b;

      const teakWoodMat = new THREE.MeshStandardMaterial({
        color: initialTeakColor,
        roughness: 0.45,
        metalness: 0.1
      });

      const darkTeakMat = new THREE.MeshStandardMaterial({
        color: initialDarkColor,
        roughness: 0.5,
        metalness: 0.05
      });

      const brassGoldMat = new THREE.MeshStandardMaterial({
        color: 0xe5b839,
        roughness: 0.25,
        metalness: 0.85
      });

      const glowingAltarMat = new THREE.MeshStandardMaterial({
        color: 0xffe8b3,
        emissive: 0xffaa33,
        emissiveIntensity: 0.4,
        roughness: 0.3
      });

      const jaaliMat = new THREE.MeshStandardMaterial({
        color: 0x54311c,
        roughness: 0.6,
        metalness: 0.1
      });

      const ledStripMat = new THREE.MeshBasicMaterial({
        color: 0xffc466,
        transparent: true,
        opacity: 0.85
      });

      // Temple Root Group
      const mandirGroup = new THREE.Group();
      scene.add(mandirGroup);

      // 1. Plinths & Drawer Base
      const basePlinth = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.2, 2.4), darkTeakMat);
      basePlinth.position.y = -1.4;
      basePlinth.receiveShadow = true;
      basePlinth.castShadow = true;
      mandirGroup.add(basePlinth);

      const subPlinth = new THREE.Mesh(new THREE.BoxGeometry(3.0, 0.25, 2.2), teakWoodMat);
      subPlinth.position.y = -1.2;
      subPlinth.receiveShadow = true;
      subPlinth.castShadow = true;
      mandirGroup.add(subPlinth);

      const drawerSection = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.45, 2.0), darkTeakMat);
      drawerSection.position.y = -0.85;
      drawerSection.castShadow = true;
      drawerSection.receiveShadow = true;
      mandirGroup.add(drawerSection);

      [-0.6, 0.6].forEach((x) => {
        const knob = new THREE.Mesh(new THREE.SphereGeometry(0.045, 16, 16), brassGoldMat);
        knob.position.set(x, -0.85, 1.03);
        mandirGroup.add(knob);
      });

      // Sanctum Altar Platform
      const sanctumDeck = new THREE.Mesh(new THREE.BoxGeometry(2.9, 0.15, 2.1), teakWoodMat);
      sanctumDeck.position.y = -0.55;
      sanctumDeck.receiveShadow = true;
      mandirGroup.add(sanctumDeck);

      // 2. Pillars (Stambhas)
      const pillarPositions = [
        [-1.2, 0.3, 0.85],
        [1.2, 0.3, 0.85],
        [-1.2, 0.3, -0.85],
        [1.2, 0.3, -0.85]
      ];

      pillarPositions.forEach(([px, py, pz]) => {
        const pBase = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.15, 0.24), brassGoldMat);
        pBase.position.set(px, -0.42, pz);
        mandirGroup.add(pBase);

        const pShaft = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.09, 1.4, 16), teakWoodMat);
        pShaft.position.set(px, py, pz);
        pShaft.castShadow = true;
        mandirGroup.add(pShaft);

        const pRing = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.025, 8, 20), brassGoldMat);
        pRing.rotation.x = Math.PI / 2;
        pRing.position.set(px, py, pz);
        mandirGroup.add(pRing);

        const pTop = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.12, 0.25), brassGoldMat);
        pTop.position.set(px, py + 0.75, pz);
        mandirGroup.add(pTop);
      });

      // 3. Back Jaali Cutwork Wall
      const backWall = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.5, 0.08), jaaliMat);
      backWall.position.set(0, 0.3, -0.82);
      mandirGroup.add(backWall);

      const innerEmblem = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.03, 32), brassGoldMat);
      innerEmblem.rotation.x = Math.PI / 2;
      innerEmblem.position.set(0, 0.45, -0.75);
      mandirGroup.add(innerEmblem);

      const ceilingLedBar = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.04, 0.08), ledStripMat);
      ceilingLedBar.position.set(0, 1.08, 0.0);
      mandirGroup.add(ceilingLedBar);

      const backJaaliLedHalo = new THREE.Mesh(new THREE.RingGeometry(0.32, 0.4, 32), ledStripMat);
      backJaaliLedHalo.position.set(0, 0.45, -0.76);
      mandirGroup.add(backJaaliLedHalo);

      // 4. Sanctum Murti / Diya Altar
      const diyaBase = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.22, 0.1, 24), brassGoldMat);
      diyaBase.position.set(0, -0.42, 0.15);
      mandirGroup.add(diyaBase);

      const diyaFlame = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.16, 16), glowingAltarMat);
      diyaFlame.position.set(0, -0.3, 0.15);
      mandirGroup.add(diyaFlame);

      // 5. Hanging Brass Temple Bells
      [-0.6, 0, 0.6].forEach((bx) => {
        const chain = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.35, 8), brassGoldMat);
        chain.position.set(bx, 0.95, 0.82);
        mandirGroup.add(chain);

        const bell = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.1, 16), brassGoldMat);
        bell.position.set(bx, 0.75, 0.82);
        bell.castShadow = true;
        mandirGroup.add(bell);
      });

      // 6. Roof Architrave & Torana
      const architrave = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.22, 2.0), teakWoodMat);
      architrave.position.y = 1.15;
      architrave.castShadow = true;
      mandirGroup.add(architrave);

      const frontArch = new THREE.Mesh(new THREE.TorusGeometry(0.85, 0.07, 8, 30, Math.PI), brassGoldMat);
      frontArch.position.set(0, 1.05, 0.85);
      mandirGroup.add(frontArch);

      // 7. Multi-tiered Shikhara
      const shikharaTier1 = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.25, 1.7), darkTeakMat);
      shikharaTier1.position.y = 1.35;
      mandirGroup.add(shikharaTier1);

      const shikharaTier2 = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.28, 1.3), teakWoodMat);
      shikharaTier2.position.y = 1.58;
      mandirGroup.add(shikharaTier2);

      const centralDome = new THREE.Mesh(
        new THREE.SphereGeometry(0.48, 24, 24, 0, Math.PI * 2, 0, Math.PI * 0.55),
        teakWoodMat
      );
      centralDome.position.y = 1.72;
      mandirGroup.add(centralDome);

      const kalashPot = new THREE.Mesh(new THREE.SphereGeometry(0.16, 20, 20), brassGoldMat);
      kalashPot.position.y = 2.18;
      mandirGroup.add(kalashPot);

      const kalashSpire = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.38, 16), brassGoldMat);
      kalashSpire.position.y = 2.42;
      mandirGroup.add(kalashSpire);

      [-0.85, 0.85].forEach((fx) => {
        const finial = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.25, 12), brassGoldMat);
        finial.position.set(fx, 1.58, 0);
        mandirGroup.add(finial);
      });

      // Shadow disc
      const shadowPlane = new THREE.Mesh(
        new THREE.CircleGeometry(2.4, 32),
        new THREE.MeshBasicMaterial({ color: 0x24140a, opacity: 0.18, transparent: true })
      );
      shadowPlane.rotation.x = -Math.PI / 2;
      shadowPlane.position.y = -1.41;
      scene.add(shadowPlane);

      // State tracking
      const state = {
        scene,
        camera,
        renderer,
        mandirGroup,
        teakWoodMat,
        darkTeakMat,
        brassGoldMat,
        glowingAltarMat,
        diyaGlow,
        diyaFlame,
        sanctumLedDownlight,
        jaaliBacklight,
        ceilingLedBar,
        backJaaliLedHalo,
        autoRotateState: autoRotate,
        targetRotationY: 0.45,
        targetRotationX: 0.1,
        currentRotationY: 0.45,
        currentRotationX: 0.1,
        isDragging: false
      };

      sceneRef.current = state;

      // Apply initial lighting toggles
      sanctumLedDownlight.visible = sanctumLedOn;
      jaaliBacklight.visible = sanctumLedOn;
      ceilingLedBar.visible = sanctumLedOn;
      backJaaliLedHalo.visible = sanctumLedOn;
      diyaGlow.visible = diyaLit;
      diyaFlame.visible = diyaLit;

      // Pointer interactions
      let previousMousePosition = { x: 0, y: 0 };

      const onPointerDown = (clientX: number, clientY: number) => {
        state.isDragging = true;
        state.autoRotateState = false;
        onAutoRotateChange?.(false);
        previousMousePosition = { x: clientX, y: clientY };
      };

      const onPointerMove = (clientX: number, clientY: number) => {
        if (!state.isDragging) return;
        const deltaX = clientX - previousMousePosition.x;
        const deltaY = clientY - previousMousePosition.y;

        state.targetRotationY += deltaX * 0.009;
        state.targetRotationX = Math.max(-0.25, Math.min(0.35, state.targetRotationX + deltaY * 0.005));

        previousMousePosition = { x: clientX, y: clientY };
      };

      const onPointerUp = () => {
        state.isDragging = false;
      };

      const dom = renderer.domElement;
      dom.style.touchAction = 'pan-y';
      dom.style.cursor = 'grab';

      const handleMouseDown = (e: MouseEvent) => {
        dom.style.cursor = 'grabbing';
        onPointerDown(e.clientX, e.clientY);
      };
      const handleMouseMove = (e: MouseEvent) => onPointerMove(e.clientX, e.clientY);
      const handleMouseUp = () => {
        dom.style.cursor = 'grab';
        onPointerUp();
      };

      let touchStartX = 0;
      let touchStartY = 0;
      let isVerticalScroll = false;
      let touchEvaluated = false;

      const handleTouchStart = (e: TouchEvent) => {
        if (e.touches.length > 0) {
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
          isVerticalScroll = false;
          touchEvaluated = false;
          onPointerDown(touchStartX, touchStartY);
        }
      };

      const handleTouchMove = (e: TouchEvent) => {
        if (e.touches.length > 0) {
          const curX = e.touches[0].clientX;
          const curY = e.touches[0].clientY;

          if (!touchEvaluated) {
            const diffX = Math.abs(curX - touchStartX);
            const diffY = Math.abs(curY - touchStartY);
            if (diffX > 5 || diffY > 5) {
              touchEvaluated = true;
              if (diffY > diffX * 1.2) {
                // Vertical scrolling on mobile page
                isVerticalScroll = true;
                state.isDragging = false;
                return;
              }
            }
          }

          if (isVerticalScroll) return;
          onPointerMove(curX, curY);
        }
      };
      const handleTouchEnd = () => onPointerUp();

      dom.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);

      dom.addEventListener('touchstart', handleTouchStart, { passive: true });
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      window.addEventListener('touchend', handleTouchEnd);

      // Render Loop
      let animationFrameId: number;
      const clock = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const delta = clock.getDelta();

        if (state.autoRotateState && !state.isDragging) {
          state.targetRotationY += 0.4 * delta;
        }

        state.currentRotationY += (state.targetRotationY - state.currentRotationY) * 0.08;
        state.currentRotationX += (state.targetRotationX - state.currentRotationX) * 0.08;

        mandirGroup.rotation.y = state.currentRotationY;
        mandirGroup.rotation.x = state.currentRotationX;

        if (diyaLit) {
          const time = clock.getElapsedTime();
          diyaGlow.intensity = 2.4 + Math.sin(time * 8.0) * 0.3 + Math.cos(time * 14.0) * 0.2;
          diyaFlame.scale.set(1 + Math.sin(time * 9) * 0.08, 1 + Math.cos(time * 7) * 0.12, 1);
        }

        renderer.render(scene, camera);
      };
      animate();

      const handleResize = () => {
        if (!container) return;
        const newW = container.clientWidth || 600;
        const newH = container.clientHeight || 500;
        camera.aspect = newW / newH;
        camera.updateProjectionMatrix();
        renderer.setSize(newW, newH);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', handleResize);
        dom.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        dom.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
        renderer.dispose();
        if (container.contains(dom)) {
          container.removeChild(dom);
        }
        sceneRef.current = null;
      };
    }, []);

    return (
      <div
        ref={mountRef}
        className="w-full h-full min-h-[340px] sm:min-h-[420px] md:min-h-[480px] flex items-center justify-center select-none"
      />
    );
  }
);
