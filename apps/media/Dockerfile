
    FROM node:alpine AS development

    WORKDIR /usr/src/app
    
    COPY package.json ./
    COPY pnpm-lock.yaml ./
    COPY nest-cli.json ./
    COPY tsconfig.build.json ./
    COPY tsconfig.json ./
    RUN npm install -g pnpm
    RUN pnpm install
    COPY apps/media apps/media
    COPY prisma prisma
    COPY libs libs
    RUN pnpm prisma generate



    
 
    
    RUN pnpm run build media
    
    FROM node:alpine AS production
    
    ARG NODE_ENV=production
    ENV NODE_ENV=${NODE_ENV}
    
    WORKDIR /usr/src/app
    
    COPY package.json ./
    COPY pnpm-lock.yaml ./
    RUN npm install -g pnpm
    RUN pnpm install --prod
    

    COPY --from=development /usr/src/app/dist ./dist
    COPY --from=development /usr/src/app/node_modules /usr/src/app/node_modules
    CMD ["node", "dist/apps/media/main"]
    