import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"]
})
export class PostCreateComponent {
  enteredTitle = "";
  enteredContent = "";
  @Output() postCreated = new EventEmitter();
  //newPost = "No Content";

  // onAddPost(postInput: HTMLTextAreaElement) {
  //console.dir(postInput);

  onAddPost() {
    const post = { title: this.enteredTitle, content: this.enteredContent };
    this.postCreated.emit(post);
    // alert("post added");
    //this.newPost = this.enteredValue;
  }
}
