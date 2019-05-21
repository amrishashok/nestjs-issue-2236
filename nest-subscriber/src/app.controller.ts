import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
    constructor() {}

    @MessagePattern('test')
    ackMessageTestData(data: any) {
        console.log(data.toString());
        return 'Message Received';
	}

	// @EventPattern('test_ack')
    // ackEventTestData(data: any) {
    //     console.log('Event Data: ', data);
    //     return 'Message Received';
    // }
}