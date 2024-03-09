# Luminescent Blitz Game Code

import pygame
import random

# Initialize pygame
pygame.init()

# Define colors
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
RED = (255, 0, 0)
GREEN = (0, 255, 0)
BLUE = (0, 0, 255)

# Set screen width and height
SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600

# Set game speed
FPS = 60

# Initialize screen
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption("Luminescent Blitz")

# Set clock
clock = pygame.time.Clock()

# Game main loop
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Fill the screen with white
    screen.fill(WHITE)

    # Draw a random circle
    pygame.draw.circle(screen, (random.randint(0, 255), random.randint(0, 255), random.randint(0, 255)),
                       (random.randint(0, SCREEN_WIDTH), random.randint(0, SCREEN_HEIGHT)), random.randint(10, 100))

    # Update the display
    pygame.display.flip()

    # Control game speed
    clock.tick(FPS)

# Quit pygame
pygame.quit()
