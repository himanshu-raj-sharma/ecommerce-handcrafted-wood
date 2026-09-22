/**
 * Web Audio API synthesizer that produces an authentic resonant Indian temple ghanti (brass bell) chime.
 * Simulates strike impulse, fundamental frequencies (around 850Hz & 1190Hz), secondary metallic harmonics,
 * and long shimmer decay with subtle vibrato.
 */
class TempleBellAudio {
  private ctx: AudioContext | null = null;

  private initContext(): AudioContext {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  public playBellTone(pitchMultiplier = 1.0) {
    try {
      const ctx = this.initContext();
      const now = ctx.currentTime;

      // Master bell output
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.7, now);
      masterGain.connect(ctx.destination);

      // Partials of a cast bell: fundamental, tierce, quint, octave, and upper shimmer
      const frequencies = [
        852 * pitchMultiplier,    // Fundamental resonance
        1193 * pitchMultiplier,   // Tierce harmonic
        1536 * pitchMultiplier,   // Quint harmonic
        2130 * pitchMultiplier,   // Nominal octave
        3410 * pitchMultiplier    // Bright brass ping
      ];

      const decayDurations = [3.2, 2.5, 2.0, 1.6, 0.8];
      const gains = [0.4, 0.25, 0.18, 0.12, 0.08];

      frequencies.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Bell strike has instant attack, then exponential decay
        osc.type = i === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        // Subtle micro-detune for authentic metallic resonance
        osc.detune.setValueAtTime((Math.random() - 0.5) * 8, now);

        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.linearRampToValueAtTime(gains[i], now + 0.005); // sharp strike
        gain.gain.exponentialRampToValueAtTime(0.0001, now + decayDurations[i]);

        osc.connect(gain);
        gain.connect(masterGain);

        osc.start(now);
        osc.stop(now + decayDurations[i] + 0.1);
      });
    } catch (e) {
      console.warn('Audio playback not supported or user gesture required:', e);
    }
  }
}

export const templeBell = new TempleBellAudio();
