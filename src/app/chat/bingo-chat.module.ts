import {
  ComponentFactory,
  ComponentFactoryResolver,
  NgModule
} from "@angular/core";
import { ChatComponent } from "./chat.component";

@NgModule({
  declarations: [ChatComponent],
  imports: [],
  providers: [],
  entryComponents: [ChatComponent]
})
export class BingoChatModule {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}
  public resolveComponent(): ComponentFactory<ChatComponent> {
    console.log("123");
    return this.componentFactoryResolver.resolveComponentFactory(ChatComponent);
  }
}
