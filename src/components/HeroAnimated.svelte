<script>
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import '../styles/components/HeroText.scss';
  import '../styles/components/HeroAnimated.scss';

  let imgRef;
  let textRef;

  onMount(() => {
    gsap.set(imgRef, { opacity: 0, x: -80 });
    gsap.set(textRef, { opacity: 0, x: 80 });
    gsap.to(imgRef, { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out' });
    gsap.to(textRef, { opacity: 1, x: 0, duration: 1.6, ease: 'power3.out', delay: 0.6 });
  });
</script>

<div class="hero-animated-container">
  <img
    src="/hero4.jpeg"
    alt="Profile pic"
    class="hero-animated-img"
    bind:this={imgRef}
    loading="eager"
  />
  <div class="hero-animated-text" bind:this={textRef}>
    <p>Hi, I'm James. I'm a full-stack developer with over 4 years of experience building websites and mobile applications.</p>
    <p>I started Parapet Creative as a vehicle to use my skills to help local businesses grow. My real passion lies in contributing to my community, and I'm always looking for new opportunities to do so.</p>
    <p>I'm currently looking for new projects to work on. If you have something you want to build, or just want to make your website pop, hit me up!</p>
  </div>
</div> 