# nestjs-issue-2236
This repository for nestjs issue 2236 https://github.com/nestjs/nest/issues/2236

# Steps
1. Run nestjs-subscriber
 `npm run start:dev`
2. Run publisher
 `node publisher.js`
3. If `@MessagePattern` is used to receive the published message `There is no matching event handler defined in the remote service.` error is thrown. 
4. I have changed `@MessagePattern` to `@EventPattern` as suggested in here. https://stackoverflow.com/a/56097813/8537188.
But no message is received.
