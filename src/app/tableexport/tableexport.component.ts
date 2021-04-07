import {
  Compiler,
  Component,
  Injector,
  OnInit,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import { BingoChatModule } from "../chat/bingo-chat.module";

@Component({
  selector: "app-tableexport",
  templateUrl: "./tableexport.component.html",
  styleUrls: ["./tableexport.component.css"]
})
export class TableexportComponent implements OnInit {
  @ViewChild("chatContainer", { read: ViewContainerRef })
  chatContainer: ViewContainerRef;
  private moduleRef: any;
  private componentFactory: any;
  constructor(private compiler: Compiler, private injector: Injector) {}

  ngOnInit() {
    this.loadChatModule();
  }
  loadChatModule() {
    import("../chat/bingo-chat.module").then(({ BingoChatModule }) => {
      this.compiler.compileModuleAsync(BingoChatModule).then(moduleFactory => {
        // this.showPreLoader = false;
        // Create a moduleRef, resolve an entry component, create the component
        this.moduleRef = moduleFactory.create(this.injector);
        this.componentFactory = this.moduleRef.instance.resolveComponent();
        const { instance } = this.chatContainer.createComponent(
          this.componentFactory,
          null,
          this.moduleRef.injector
        );
      });
    });
  }

  reloadModule() {
    this.chatContainer.clear();
    console.log("reload module");
    // this.loadChatModule();
    // this.componentFactory = this.moduleRef.intance.resolveComponent();
    this.chatContainer.createComponent(
      this.componentFactory,
      null,
      this.moduleRef.injector
    );
  }
}
