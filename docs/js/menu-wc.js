'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">scimaps documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AboutModule.html" data-type="entity-link">AboutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AboutModule-02cb0990a102a7b4a8add63d4a25ac97"' : 'data-target="#xs-components-links-module-AboutModule-02cb0990a102a7b4a8add63d4a25ac97"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AboutModule-02cb0990a102a7b4a8add63d4a25ac97"' :
                                            'id="xs-components-links-module-AboutModule-02cb0990a102a7b4a8add63d4a25ac97"' }>
                                            <li class="link">
                                                <a href="components/AboutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AboutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AboutRoutingModule.html" data-type="entity-link">AboutRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ActionCardModule.html" data-type="entity-link">ActionCardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ActionCardModule-66de427ac3135ac5c28bfcbbfd886529"' : 'data-target="#xs-components-links-module-ActionCardModule-66de427ac3135ac5c28bfcbbfd886529"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ActionCardModule-66de427ac3135ac5c28bfcbbfd886529"' :
                                            'id="xs-components-links-module-ActionCardModule-66de427ac3135ac5c28bfcbbfd886529"' }>
                                            <li class="link">
                                                <a href="components/ActionCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ActionCardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-0c7d0207f4683d8b3098c7e165f34142"' : 'data-target="#xs-components-links-module-AppModule-0c7d0207f4683d8b3098c7e165f34142"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-0c7d0207f4683d8b3098c7e165f34142"' :
                                            'id="xs-components-links-module-AppModule-0c7d0207f4683d8b3098c7e165f34142"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BookOverviewModule.html" data-type="entity-link">BookOverviewModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BookOverviewModule-cbb31f7a19bddbf874aa7f4775ce603a"' : 'data-target="#xs-components-links-module-BookOverviewModule-cbb31f7a19bddbf874aa7f4775ce603a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BookOverviewModule-cbb31f7a19bddbf874aa7f4775ce603a"' :
                                            'id="xs-components-links-module-BookOverviewModule-cbb31f7a19bddbf874aa7f4775ce603a"' }>
                                            <li class="link">
                                                <a href="components/BookOverviewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BookOverviewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BooksModule.html" data-type="entity-link">BooksModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BooksModule-f5456b7f41f807efc0cbbc80cbe4028c"' : 'data-target="#xs-components-links-module-BooksModule-f5456b7f41f807efc0cbbc80cbe4028c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BooksModule-f5456b7f41f807efc0cbbc80cbe4028c"' :
                                            'id="xs-components-links-module-BooksModule-f5456b7f41f807efc0cbbc80cbe4028c"' }>
                                            <li class="link">
                                                <a href="components/BooksComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BooksComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BooksRoutingModule.html" data-type="entity-link">BooksRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CallForMacroscopesModule.html" data-type="entity-link">CallForMacroscopesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CallForMacroscopesModule-14df5b9033f1bcc9d7fa0afa35115668"' : 'data-target="#xs-components-links-module-CallForMacroscopesModule-14df5b9033f1bcc9d7fa0afa35115668"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CallForMacroscopesModule-14df5b9033f1bcc9d7fa0afa35115668"' :
                                            'id="xs-components-links-module-CallForMacroscopesModule-14df5b9033f1bcc9d7fa0afa35115668"' }>
                                            <li class="link">
                                                <a href="components/CallForMacroscopesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CallForMacroscopesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CallForMacroscopesRoutingModule.html" data-type="entity-link">CallForMacroscopesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CallOutModule.html" data-type="entity-link">CallOutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CallOutModule-d6107156ac9c36e48533e0e48faf609d"' : 'data-target="#xs-components-links-module-CallOutModule-d6107156ac9c36e48533e0e48faf609d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CallOutModule-d6107156ac9c36e48533e0e48faf609d"' :
                                            'id="xs-components-links-module-CallOutModule-d6107156ac9c36e48533e0e48faf609d"' }>
                                            <li class="link">
                                                <a href="components/CallOutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CallOutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CardGalleryModule.html" data-type="entity-link">CardGalleryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CardGalleryModule-4e2b6f1329cda1f3d7bfbf1a96a73fb3"' : 'data-target="#xs-components-links-module-CardGalleryModule-4e2b6f1329cda1f3d7bfbf1a96a73fb3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CardGalleryModule-4e2b6f1329cda1f3d7bfbf1a96a73fb3"' :
                                            'id="xs-components-links-module-CardGalleryModule-4e2b6f1329cda1f3d7bfbf1a96a73fb3"' }>
                                            <li class="link">
                                                <a href="components/CardGalleryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardGalleryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CarouselModule.html" data-type="entity-link">CarouselModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CarouselModule-0889ea6359bea4080280a08750e59ff4"' : 'data-target="#xs-components-links-module-CarouselModule-0889ea6359bea4080280a08750e59ff4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CarouselModule-0889ea6359bea4080280a08750e59ff4"' :
                                            'id="xs-components-links-module-CarouselModule-0889ea6359bea4080280a08750e59ff4"' }>
                                            <li class="link">
                                                <a href="components/CarouselComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CarouselComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CarouselItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CarouselItemComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContactModule.html" data-type="entity-link">ContactModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ContactModule-022dea47d9cc4c35889ae06776ba55cb"' : 'data-target="#xs-components-links-module-ContactModule-022dea47d9cc4c35889ae06776ba55cb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContactModule-022dea47d9cc4c35889ae06776ba55cb"' :
                                            'id="xs-components-links-module-ContactModule-022dea47d9cc4c35889ae06776ba55cb"' }>
                                            <li class="link">
                                                <a href="components/ContactComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContactComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DiscoverListingModule.html" data-type="entity-link">DiscoverListingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DiscoverListingModule-0bbeb63888327bec64f4e7c94d138a59"' : 'data-target="#xs-components-links-module-DiscoverListingModule-0bbeb63888327bec64f4e7c94d138a59"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DiscoverListingModule-0bbeb63888327bec64f4e7c94d138a59"' :
                                            'id="xs-components-links-module-DiscoverListingModule-0bbeb63888327bec64f4e7c94d138a59"' }>
                                            <li class="link">
                                                <a href="components/DiscoverListingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DiscoverListingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FooterModule.html" data-type="entity-link">FooterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FooterModule-fde5c724087b99e47e2931a4af042ed7"' : 'data-target="#xs-components-links-module-FooterModule-fde5c724087b99e47e2931a4af042ed7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FooterModule-fde5c724087b99e47e2931a4af042ed7"' :
                                            'id="xs-components-links-module-FooterModule-fde5c724087b99e47e2931a4af042ed7"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HeaderModule.html" data-type="entity-link">HeaderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HeaderModule-93cdf02317b05b9a8888e3a968055700"' : 'data-target="#xs-components-links-module-HeaderModule-93cdf02317b05b9a8888e3a968055700"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HeaderModule-93cdf02317b05b9a8888e3a968055700"' :
                                            'id="xs-components-links-module-HeaderModule-93cdf02317b05b9a8888e3a968055700"' }>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-3c3a3742bf51a3ca25eb6cdd2c282ab3"' : 'data-target="#xs-components-links-module-HomeModule-3c3a3742bf51a3ca25eb6cdd2c282ab3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-3c3a3742bf51a3ca25eb6cdd2c282ab3"' :
                                            'id="xs-components-links-module-HomeModule-3c3a3742bf51a3ca25eb6cdd2c282ab3"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link">HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HostingModule.html" data-type="entity-link">HostingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HostingModule-631f07ab6023df9b95bc0c813605e32e"' : 'data-target="#xs-components-links-module-HostingModule-631f07ab6023df9b95bc0c813605e32e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HostingModule-631f07ab6023df9b95bc0c813605e32e"' :
                                            'id="xs-components-links-module-HostingModule-631f07ab6023df9b95bc0c813605e32e"' }>
                                            <li class="link">
                                                <a href="components/HostingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HostingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HostingRoutingModule.html" data-type="entity-link">HostingRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ItemDrawerModule.html" data-type="entity-link">ItemDrawerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ItemDrawerModule-eec23378701d2d8b7f1461d87a5ca09e"' : 'data-target="#xs-components-links-module-ItemDrawerModule-eec23378701d2d8b7f1461d87a5ca09e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ItemDrawerModule-eec23378701d2d8b7f1461d87a5ca09e"' :
                                            'id="xs-components-links-module-ItemDrawerModule-eec23378701d2d8b7f1461d87a5ca09e"' }>
                                            <li class="link">
                                                <a href="components/ItemDrawerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ItemDrawerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LazyCardsModule.html" data-type="entity-link">LazyCardsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LazyCardsModule-b54459e83562baf556551f678aaebbec"' : 'data-target="#xs-components-links-module-LazyCardsModule-b54459e83562baf556551f678aaebbec"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LazyCardsModule-b54459e83562baf556551f678aaebbec"' :
                                            'id="xs-components-links-module-LazyCardsModule-b54459e83562baf556551f678aaebbec"' }>
                                            <li class="link">
                                                <a href="components/LazyCardsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LazyCardsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LearningCenterModule.html" data-type="entity-link">LearningCenterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LearningCenterModule-a5ff5d210b473b2a93646a250a97d622"' : 'data-target="#xs-components-links-module-LearningCenterModule-a5ff5d210b473b2a93646a250a97d622"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LearningCenterModule-a5ff5d210b473b2a93646a250a97d622"' :
                                            'id="xs-components-links-module-LearningCenterModule-a5ff5d210b473b2a93646a250a97d622"' }>
                                            <li class="link">
                                                <a href="components/LearningCenterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LearningCenterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LearningCenterRoutingModule.html" data-type="entity-link">LearningCenterRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MacroscopesModule.html" data-type="entity-link">MacroscopesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MacroscopesModule-07c346783047193e8dba401c8fe565f6"' : 'data-target="#xs-components-links-module-MacroscopesModule-07c346783047193e8dba401c8fe565f6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MacroscopesModule-07c346783047193e8dba401c8fe565f6"' :
                                            'id="xs-components-links-module-MacroscopesModule-07c346783047193e8dba401c8fe565f6"' }>
                                            <li class="link">
                                                <a href="components/MacroscopesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MacroscopesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MacroscopesRoutingModule.html" data-type="entity-link">MacroscopesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MapsModule.html" data-type="entity-link">MapsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MapsModule-41423af844c0cf0cc145879c278c7396"' : 'data-target="#xs-components-links-module-MapsModule-41423af844c0cf0cc145879c278c7396"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MapsModule-41423af844c0cf0cc145879c278c7396"' :
                                            'id="xs-components-links-module-MapsModule-41423af844c0cf0cc145879c278c7396"' }>
                                            <li class="link">
                                                <a href="components/MapsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MapsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MapsRoutingModule.html" data-type="entity-link">MapsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MenuIconModule.html" data-type="entity-link">MenuIconModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MenuIconModule-456806ac3aa24a26fd89a4042709eb9e"' : 'data-target="#xs-components-links-module-MenuIconModule-456806ac3aa24a26fd89a4042709eb9e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MenuIconModule-456806ac3aa24a26fd89a4042709eb9e"' :
                                            'id="xs-components-links-module-MenuIconModule-456806ac3aa24a26fd89a4042709eb9e"' }>
                                            <li class="link">
                                                <a href="components/MenuIconComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuIconComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MobileHeaderMenuModule.html" data-type="entity-link">MobileHeaderMenuModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MobileHeaderMenuModule-90747cf1acfe6d341a9a4692289f46f8"' : 'data-target="#xs-components-links-module-MobileHeaderMenuModule-90747cf1acfe6d341a9a4692289f46f8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MobileHeaderMenuModule-90747cf1acfe6d341a9a4692289f46f8"' :
                                            'id="xs-components-links-module-MobileHeaderMenuModule-90747cf1acfe6d341a9a4692289f46f8"' }>
                                            <li class="link">
                                                <a href="components/MobileHeaderMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MobileHeaderMenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NewsItemListModule.html" data-type="entity-link">NewsItemListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NewsItemListModule-35c6eb9262c51d5aacfc8a65e2a8d8bf"' : 'data-target="#xs-components-links-module-NewsItemListModule-35c6eb9262c51d5aacfc8a65e2a8d8bf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NewsItemListModule-35c6eb9262c51d5aacfc8a65e2a8d8bf"' :
                                            'id="xs-components-links-module-NewsItemListModule-35c6eb9262c51d5aacfc8a65e2a8d8bf"' }>
                                            <li class="link">
                                                <a href="components/NewsItemListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NewsItemListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NewsItemModule.html" data-type="entity-link">NewsItemModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NewsItemModule-3439766eacc6d66860aa93fb667cd889"' : 'data-target="#xs-components-links-module-NewsItemModule-3439766eacc6d66860aa93fb667cd889"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NewsItemModule-3439766eacc6d66860aa93fb667cd889"' :
                                            'id="xs-components-links-module-NewsItemModule-3439766eacc6d66860aa93fb667cd889"' }>
                                            <li class="link">
                                                <a href="components/NewsItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NewsItemComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileGalleryModule.html" data-type="entity-link">ProfileGalleryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProfileGalleryModule-89692e83c58444364cd1b69259273d6e"' : 'data-target="#xs-components-links-module-ProfileGalleryModule-89692e83c58444364cd1b69259273d6e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfileGalleryModule-89692e83c58444364cd1b69259273d6e"' :
                                            'id="xs-components-links-module-ProfileGalleryModule-89692e83c58444364cd1b69259273d6e"' }>
                                            <li class="link">
                                                <a href="components/ProfileGalleryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileGalleryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PurchaseModalModule.html" data-type="entity-link">PurchaseModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PurchaseModalModule-8c97874685fb6b3a9b038ef25d37e901"' : 'data-target="#xs-components-links-module-PurchaseModalModule-8c97874685fb6b3a9b038ef25d37e901"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PurchaseModalModule-8c97874685fb6b3a9b038ef25d37e901"' :
                                            'id="xs-components-links-module-PurchaseModalModule-8c97874685fb6b3a9b038ef25d37e901"' }>
                                            <li class="link">
                                                <a href="components/PurchaseModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PurchaseModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-f489dd73a9baba6e7d5315b96653e874"' : 'data-target="#xs-directives-links-module-SharedModule-f489dd73a9baba6e7d5315b96653e874"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-f489dd73a9baba6e7d5315b96653e874"' :
                                        'id="xs-directives-links-module-SharedModule-f489dd73a9baba6e7d5315b96653e874"' }>
                                        <li class="link">
                                            <a href="directives/BreakpointDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">BreakpointDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SocialSidebarModule.html" data-type="entity-link">SocialSidebarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SocialSidebarModule-d5ce3bc3d805772be7a81787d5110ed6"' : 'data-target="#xs-components-links-module-SocialSidebarModule-d5ce3bc3d805772be7a81787d5110ed6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SocialSidebarModule-d5ce3bc3d805772be7a81787d5110ed6"' :
                                            'id="xs-components-links-module-SocialSidebarModule-d5ce3bc3d805772be7a81787d5110ed6"' }>
                                            <li class="link">
                                                <a href="components/SocialSidebarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SocialSidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StateModule.html" data-type="entity-link">StateModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/VenuesModule.html" data-type="entity-link">VenuesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-VenuesModule-445b2cada8858a71ead8c747a317f792"' : 'data-target="#xs-components-links-module-VenuesModule-445b2cada8858a71ead8c747a317f792"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VenuesModule-445b2cada8858a71ead8c747a317f792"' :
                                            'id="xs-components-links-module-VenuesModule-445b2cada8858a71ead8c747a317f792"' }>
                                            <li class="link">
                                                <a href="components/VenuesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VenuesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/VenuesRoutingModule.html" data-type="entity-link">VenuesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/WarningDialogModule.html" data-type="entity-link">WarningDialogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WarningDialogModule-03286073cf455e2d65f9d82a87290670"' : 'data-target="#xs-components-links-module-WarningDialogModule-03286073cf455e2d65f9d82a87290670"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WarningDialogModule-03286073cf455e2d65f9d82a87290670"' :
                                            'id="xs-components-links-module-WarningDialogModule-03286073cf455e2d65f9d82a87290670"' }>
                                            <li class="link">
                                                <a href="components/WarningDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WarningDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/BreakpointRegistryService.html" data-type="entity-link">BreakpointRegistryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContentService.html" data-type="entity-link">ContentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MediaQueryService.html" data-type="entity-link">MediaQueryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PageState.html" data-type="entity-link">PageState</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RouterState.html" data-type="entity-link">RouterState</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/MacroscopesBodyResolverService.html" data-type="entity-link">MacroscopesBodyResolverService</a>
                            </li>
                            <li class="link">
                                <a href="guards/MacroscopesResolverService.html" data-type="entity-link">MacroscopesResolverService</a>
                            </li>
                            <li class="link">
                                <a href="guards/MapsBodyResolverService.html" data-type="entity-link">MapsBodyResolverService</a>
                            </li>
                            <li class="link">
                                <a href="guards/MapsResolverService.html" data-type="entity-link">MapsResolverService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ActionCardItem.html" data-type="entity-link">ActionCardItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Book.html" data-type="entity-link">Book</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Breakpoint.html" data-type="entity-link">Breakpoint</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DiscoverItem.html" data-type="entity-link">DiscoverItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ImageCardItem.html" data-type="entity-link">ImageCardItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MapItem.html" data-type="entity-link">MapItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NewsItem.html" data-type="entity-link">NewsItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PageStateModel.html" data-type="entity-link">PageStateModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Profile.html" data-type="entity-link">Profile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PurchaseFormInfo.html" data-type="entity-link">PurchaseFormInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ThumbnailLink.html" data-type="entity-link">ThumbnailLink</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Venue.html" data-type="entity-link">Venue</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WarningDialogData.html" data-type="entity-link">WarningDialogData</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});