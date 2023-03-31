import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  id = 1;
  title!: string;
  desc!:string
  submit(){
    const todo = {
      sno:this.id,
      title: this.title,
      desc:this.desc,
      active: true
    }
    this.id++;
    this.todoAdd.emit(todo);
  }
}
