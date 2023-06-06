const app = new PIXI.Application({ background: '#1099bb' });
globalThis.__PIXI_APP__ = app;
document.body.appendChild(app.view);

async function init() {
    // manifest example
    const manifestExample = {
        bundles: [{
            name: 'load-screen',
            assets: [
                {
                    name: 'flowerTop',
                    srcs: 'splash.jpg',
                },
            ],
        },
        {
            name: 'loadingcontinue',
            assets: [
                {
                    name: 'continue',
                    srcs: 'click_continue.png',
                },
            ],
        },
        {
            name: 'loadingcontinueglow',
            assets: [
                {
                    name: 'continueglow',
                    srcs: 'strip.jpg',
                },
            ],
        },
        {
            name: 'game-screen',
            assets: [
                {
                    name: 'eggHead',
                    srcs: 'HomeBg.jpg',
                },
            ],
        },
        {
            name: 'basegame',
            assets: [
                {
                    name: 'platform',
                    srcs: 'bottom_platfarm.png',
                },
            ],
        },
        {
            name: 'basegamespin',
            assets: [
                {
                    name: 'spinbutton',
                    srcs: 'spin_button.png',
                },
            ],
        }
    ],
    };

    await PIXI.Assets.init({ manifest: manifestExample });

    // bundles can be loaded in the background too!
    PIXI.Assets.backgroundLoadBundle(['load-screen','loadingcontinue','loadingcontinueglow', 'game-screen','basegame','basegamespin']);

    makeLoadScreen();
}

async function makeLoadScreen() {
    // get the assets from the load screen bundle.
    // If the bundle was already downloaded the promise resolves instantly!
    const loadScreenAssets = await PIXI.Assets.loadBundle('load-screen');
    const loadingcontinueAsset = await PIXI.Assets.loadBundle('loadingcontinue');
    const loadingcontinueGlowAsset = await PIXI.Assets.loadBundle('loadingcontinueglow');


    // create a new Sprite from the resolved loaded texture
    const goNext = new PIXI.Sprite(loadScreenAssets.flowerTop);
    const continueclick = new PIXI.Sprite(loadingcontinueAsset.continue);
    const continueclickglow = new PIXI.Sprite(loadingcontinueGlowAsset.continueglow);

    goNext.anchor.set(0.5);
    goNext.width=800;
    goNext.height=599;
    goNext.x = 400;
    goNext.y = 300;
    app.stage.addChild(goNext);

    // here add the glow image
    continueclickglow.anchor.set(0.5);
    continueclickglow.width=285;
    continueclickglow.height=42;
    continueclickglow.x = 388;
    continueclickglow.y = 485;
    app.stage.addChild(continueclickglow);

    // here click continue added
    continueclick.anchor.set(0.5);
    continueclick.width=285;
    continueclick.height=42;
    continueclick.x = 388;
    continueclick.y = 485;
    app.stage.addChild(continueclick);

    setInterval(() => {
        continueclickglow.visible=false;
        setTimeout(() => {
            continueclickglow.visible=true;
        }, 1000);
        console.log("ganesh");
    }, 1000);

    


    goNext.interactive = true;
    goNext.cursor = 'pointer';

    goNext.on('pointertap', async () => {
        console.log("rama");
        goNext.destroy();
        makeGameScreen();
    });
}

async function makeGameScreen() {
    // Wait here until you get the assets
    // If the user spends enough time in the load screen by the time they reach the game screen
    // the assets are completely loaded and the promise resolves instantly!
    const loadScreenAssets = await PIXI.Assets.loadBundle('game-screen');
    const platformAssets = await PIXI.Assets.loadBundle('basegame');

    // create a new Sprite from the resolved loaded texture
    const goBack = new PIXI.Sprite(loadScreenAssets.eggHead);
    //
    const platform = new PIXI.Sprite(platformAssets.platform);
    goBack.anchor.set(0.5);
    goBack.width=800;
    goBack.height=600;
    goBack.position.x = 400;
    goBack.position.y = 300;
    app.stage.addChild(goBack);

    // platform add here
    platform.anchor.set(0.5);
    platform.width=800;
    platform.height=126;
    platform.position.x = 400;
    platform.position.y = 535;
    app.stage.addChild(platform);
    // goBack.interactive = false;
    // goBack.cursor = 'pointer';

    // goBack.on('pointertap', async () => {
    //     goBack.destroy();
    //     // The user can go back and the files are already downloaded
    //     makeLoadScreen();
    // });
}

init();
