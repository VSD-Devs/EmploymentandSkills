#!/bin/bash

# Colours for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Colour

echo -e "${BLUE}Starting pre-build checks...${NC}"

# Run TypeScript type checking
echo -e "${BLUE}Running TypeScript type checking...${NC}"
npm run type-check

# Check if TypeScript type checking failed
if [ $? -ne 0 ]; then
  echo -e "${RED}TypeScript type checking failed. Please fix the errors above before building.${NC}"
  exit 1
fi

echo -e "${GREEN}TypeScript type checking passed!${NC}"

# Run ESLint
echo -e "${BLUE}Running ESLint...${NC}"
npm run lint

# Check if ESLint failed
if [ $? -ne 0 ]; then
  echo -e "${RED}ESLint checks failed. Please fix the errors above before building.${NC}"
  exit 1
fi

echo -e "${GREEN}ESLint checks passed!${NC}"

# All checks passed, proceed with build
echo -e "${GREEN}All checks passed! Proceeding with build...${NC}"
npm run optimize-images && next build

echo -e "${GREEN}Build completed successfully!${NC}" 