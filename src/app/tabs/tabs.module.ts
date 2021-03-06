import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule, NSEmptyOutletComponent } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TabsComponent } from "./tabs.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            {
                path: "default", component: TabsComponent, children: [
                    {
                        path: "home",
                        component: NSEmptyOutletComponent,
                        loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule),
                        outlet: "homeTab"
                    },
                    {
                        path: "browse",
                        component: NSEmptyOutletComponent,
                        loadChildren: () => import("~/app/browse/browse.module").then((m) => m.BrowseModule),
                        outlet: "browseTab"
                    },
                    {
                        path: "search",
                        component: NSEmptyOutletComponent,
                        loadChildren: () => import("~/app/search/search.module").then((m) => m.SearchModule),
                        outlet: "searchTab"
                    },
                ]
            }
        ])
    ],
    declarations: [
        TabsComponent
    ],
    providers: [
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class TabsModule { }
