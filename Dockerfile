FROM oven/bun:1
WORKDIR /app
COPY package.json /app
COPY bun.lockb /app
RUN bun install
COPY . /app
RUN bun run build
CMD ["bun", "run", "preview"]
