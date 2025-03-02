# Streamlined Build Process Guide

## Introduction

This guide explains the improved build process for our NextJS project. These improvements aim to make TypeScript error detection more efficient and help you spot issues earlier in the development cycle, rather than waiting for the build process to complete.

## Available Commands

We've added several useful commands to make development and building more efficient:

| Command                    | Description                                                  |
| -------------------------- | ------------------------------------------------------------ |
| `npm run type-check`       | Run TypeScript type checking without emitting files          |
| `npm run lint-and-type-check` | Run both ESLint and TypeScript type checking              |
| `npm run fast-build`       | Run lint and type check before building                      |
| `npm run dev:typecheck`    | Run TypeScript type checking in watch mode (continuously checks for errors as you code) |
| `npm run ci-check`         | Run checks for CI/CD pipelines                               |

## Using VS Code Tasks

We've also added VS Code tasks to make it easier to run these commands directly from your editor:

1. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
2. Type "Run Task" and select "Tasks: Run Task"
3. Choose one of the following tasks:
   - **TypeScript: Type Check** - Run type checking once
   - **TypeScript: Watch for Errors** - Continuously check for TypeScript errors as you code
   - **Next: Check and Build** - Run checks and then build (recommended)
   - **Next: Fast Build** - Quick version of check and build

## Recommended Workflow

For the most efficient development workflow:

1. Start your development server with `npm run dev`
2. In a separate terminal, run `npm run dev:typecheck` to catch TypeScript errors in real-time
3. When ready to build, use `npm run fast-build` or the VS Code task "Next: Check and Build"

This approach will help you catch and fix TypeScript errors early, rather than waiting for them to appear at the end of a long build process.

## Benefits

- **Early Error Detection**: Catch TypeScript errors as you code
- **Faster Feedback Loop**: Get immediate feedback on type issues
- **Streamlined Building**: Pre-check everything before starting the build process
- **Improved Productivity**: Focus on fixing issues when they occur, not after a long build

## Tips for Faster Builds

1. **Be selective with imports**: Only import what you need
2. **Use partial builds when possible**: If only working on one part of the application, consider building just that part
3. **Optimise images beforehand**: Large image processing can slow down builds
4. **Keep dependencies updated**: Outdated packages can sometimes cause slower builds 