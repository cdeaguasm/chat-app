import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage } from '../models/chat-message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() chatMessage: ChatMessage;
  userEmail: string;
  userName: string;
  messageContent: string;
  timeStamp: Date = new Date();
  isOwnMessage: boolean;

  constructor() { }

  ngOnInit() {
    this.messageContent = this.chatMessage.message;
    this.timeStamp = this.chatMessage.timeSend;
    this.userEmail = this.chatMessage.email;
    this.userName = this.chatMessage.userName;
  }
}