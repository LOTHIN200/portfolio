import { defineStore } from "pinia";

export const useParticleOptionsStore = defineStore("particleOptions", {
  state: () => ({
    particleStyles: [
      {
        id: "option1",
        name: "Style 1",
        avatar: "images/login.png",
        options: {
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          background: {
            color: {
              // value: "#000000",
            },
          },
          particles: {
            number: {
              value: 50, // Fewer particles for a small dot
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: "#4deeea", // Vibrant teal particles
            },
            shape: {
              type: "triangle", // Use circles for simplicity
            },
            opacity: {
              value: 0.7,
              random: false,
              animation: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              animation: {
                enable: false,
              },
            },
            links: {
              enable: false, // Disable links for cleaner dot formation
            },
            move: {
              enable: true,
              speed: 1, // Slow speed for smoother animation
              direction: "none",
              random: false,
              straight: false,
              outModes: {
                default: "bounce", // Particles bounce back when they hit the edges
              },
            },
            position: {
              // Define positions for particles to form a dot (.)
              value: [
                // Centralized dot formation
                { x: 50, y: 50 },
                { x: 51, y: 50 },
                { x: 52, y: 50 },
                { x: 53, y: 50 },
                { x: 54, y: 50 },
                { x: 50, y: 51 },
                { x: 51, y: 51 },
                { x: 52, y: 51 },
                { x: 53, y: 51 },
                { x: 54, y: 51 },
                { x: 50, y: 52 },
                { x: 51, y: 52 },
                { x: 52, y: 52 },
                { x: 53, y: 52 },
                { x: 54, y: 52 },
                { x: 50, y: 53 },
                { x: 51, y: 53 },
                { x: 52, y: 53 },
                { x: 53, y: 53 },
                { x: 54, y: 53 },
                { x: 50, y: 54 },
                { x: 51, y: 54 },
                { x: 52, y: 54 },
                { x: 53, y: 54 },
                { x: 54, y: 54 },
              ],
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "repulse", // Repulse particles on hover
              },
              onClick: {
                enable: true,
                mode: "push", // Push particles on click
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                quantity: 4,
              },
            },
          },
          retina_detect: true,
        },
      },
      {
        id: "option2",
        name: "Style 2",
        avatar: "images/login.png",
        options: {
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          background: {
            // color: "#000000", // Black background for a space-like effect
          },
          particles: {
            number: {
              value: 100, // More particles for a dense field
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"], // Vibrant colors
            },
            shape: {
              type: "circle", // Simple circles for particles
            },
            opacity: {
              value: 0.8,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.1,
                sync: false,
              },
            },
            links: {
              enable: true, // Enable links for a connected field
              distance: 100,
              color: "#FFFFFF",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2, // Slower movement for a stable field
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "bounce",
              },
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "attract", // Attract particles to the cursor
              },
              onClick: {
                enable: true,
                mode: "push", // Push particles on click
              },
              resize: true,
            },
            modes: {
              attract: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                quantity: 4,
              },
            },
          },
          retina_detect: true,
        },
      },
      {
        id: "option3",
        name: "Style 3",
        avatar: "images/login.png",
        options: {
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          background: {
            // color: "#000000", // Black background for an electric storm
          },
          particles: {
            number: {
              value: 150, // More particles for a dense storm
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"], // Vibrant colors
            },
            shape: {
              type: "circle", // Simple circles for particles
            },
            opacity: {
              value: 0.8,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.1,
                sync: false,
              },
            },
            links: {
              enable: true, // Enable links for an electric storm
              distance: 100,
              color: "#FFFFFF",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 5, // Faster movement for an electric storm
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "out",
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "repulse", // Repulse particles on hover
              },
              onClick: {
                enable: true,
                mode: "push", // Push particles on click
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                quantity: 4,
              },
            },
          },
          retina_detect: true,
        },
      },
      {
        id: "option4",
        name: "Style 4",
        avatar: "images/login.png",
        options: {
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          background: {
            // color: "#000000", // Black background for abstract waves
          },
          particles: {
            number: {
              value: 150, // More particles for a dense wave
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"], // Vibrant colors
            },
            shape: {
              type: "circle", // Simple circles for particles
            },
            opacity: {
              value: 0.8,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.1,
                sync: false,
              },
            },
            links: {
              enable: true, // Enable links for a connected wave
              distance: 100,
              color: "#FFFFFF",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 3, // Faster movement for a wave effect
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "out",
              },
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "repulse", // Repulse particles on hover
              },
              onClick: {
                enable: true,
                mode: "push", // Push particles on click
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                quantity: 4,
              },
            },
          },
          retina_detect: true,
        },
      },
      {
        id: "option5",
        name: "Style 5",
        avatar: "images/login.png",
        options: {
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          background: {
            // color: "#000000", // Black background for contrast
          },
          particles: {
            number: {
              value: 200, // More particles for a dense vortex
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: [
                "#FF0000",
                "#FF7F00",
                "#FFFF00",
                "#00FF00",
                "#0000FF",
                "#4B0082",
                "#8F00FF",
              ], // Rainbow colors
            },
            shape: {
              type: "circle", // Simple circles for particles
            },
            opacity: {
              value: 0.8,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.1,
                sync: false,
              },
            },
            links: {
              enable: true, // Enable links for a connected vortex
              distance: 100,
              color: "#FFFFFF",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 3, // Faster movement for a swirling effect
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "out",
              },
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "repulse", // Repulse particles on hover
              },
              onClick: {
                enable: true,
                mode: "push", // Push particles on click
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                quantity: 4,
              },
            },
          },
          retina_detect: true,
        },
      },
      {
        id: "option6",
        name: "Style 6",
        avatar: "images/login.png",
        options: {
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          background: {
            // color: "#000000", // Black background for a cyberpunk city
          },
          particles: {
            number: {
              value: 150, // More particles for a dense city
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: ["#FF00FF", "#00FFFF", "#FF0000", "#00FF00"], // Neon colors
            },
            shape: {
              type: "circle", // Simple circles for particles
            },
            opacity: {
              value: 0.8,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false,
              },
            },
            size: {
              value: 4,
              random: true,
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.1,
                sync: false,
              },
            },
            links: {
              enable: true, // Enable links for a connected city
              distance: 150,
              color: "#FFFFFF",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2, // Slower movement for a stable city
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "bounce",
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "repulse", // Repulse particles on hover
              },
              onClick: {
                enable: true,
                mode: "push", // Push particles on click
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                quantity: 4,
              },
            },
          },
          retina_detect: true,
        },
      },
      {
        id: "option7",
        name: "Style 7",
        avatar: "images/login.png",
        options: {
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          background: {
            // color: "#000000", // Black background for Matrix effect
          },
          particles: {
            number: {
              value: 200, // More particles for a dense rain
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: "#00FF00", // Green color for Matrix code
            },
            shape: {
              type: "char", // Use characters for Matrix code
              options: {
                char: {
                  value: ["0", "1"], // Binary characters
                },
              },
            },
            opacity: {
              value: 0.8,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false,
              },
            },
            size: {
              value: 10,
              random: true,
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.1,
                sync: false,
              },
            },
            links: {
              enable: false, // No links for Matrix rain
            },
            move: {
              enable: true,
              speed: 5, // Faster movement for a rain effect
              direction: "bottom", // Particles fall downwards
              random: true,
              straight: false,
              outModes: {
                default: "out",
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "repulse", // Repulse particles on hover
              },
              onClick: {
                enable: true,
                mode: "push", // Push particles on click
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                quantity: 4,
              },
            },
          },
          retina_detect: true,
        },
      },
    ],

    selectedStyleId: "option7",
  }),
  actions: {
    setSelectedStyle(styleId: string) {
      this.selectedStyleId = styleId;
    },
  },
  getters: {
    selectedStyle: (state) => {
      return state.particleStyles.find(
        (style) => style.id === state.selectedStyleId
      );
    },
  },
});
