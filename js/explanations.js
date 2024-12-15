// explanations.js
const explanations = {
    // Gamescope Parameters
    "gamescope": "A Wayland compositor that can be used for gaming.",
    "-w": {
        "description": "Specifies the render resolution width (internal game resolution).",
        "template": "This will set the render resolution width to {value} pixels."
    },
    "-h": {
        "description": "Specifies the render resolution height (internal game resolution).",
        "template": "This will set the render resolution height to {value} pixels."
    },
    "-W": {
        "description": "Specifies the final output width (display/window resolution).",
        "template": "This will set the final output width to {value} pixels."
    },
    "-H": {
        "description": "Specifies the final output height (display/window resolution).",
        "template": "This will set the final output height to {value} pixels."
    },
    "-r": {
        "description": "Sets the refresh rate in Hz (e.g., 60, 120, 144, 165).",
        "template": "This will set the refresh rate to {value} Hz."
    },
    "-o": {
        "description": "Specifies the output display or index (e.g., HDMI-A-1).",
        "template": "This will set the output display to '{value}'."
    },
    "-f": "Runs the game in fullscreen mode.",
    "-b": "Runs the game in borderless windowed mode.",
    "-e": "Executes the specified command with the environment variables.",
    "--": "Indicates the end of Gamescope options and the start of the command.",
    "-F": "Forces Gamescope to use the highest available refresh rate.",
    "--fullscreen": "Sets the game to launch fullscreen.",
    "--force-grab-cursor": "Forces the cursor to be grabbed by the game window.",
    "-S": "Disables vsync to unlock higher frame rates.",
    "-U": "Forces the use of an unredirected fullscreen window.",
    "-n": {
        "description": "Sets the number of frames to pre-render.",
        "template": "This will set the number of pre-rendered frames to {value}."
    },
    "-M": {
        "description": "Sets the maximum FPS cap.",
        "template": "This will cap the FPS to {value}."
    },
    "-i": "Shows the input overlay for debugging purposes.",
    "-v": "Enables verbose output for debugging.",
    "-d": "Enables debug mode for more detailed logging.",
    "-V": "Displays the current version of Gamescope.",
    "-m": {
        "description": "Specifies the monitor index.",
        "template": "This will use monitor index {value}."
    },
    "gamemoderun": "Runs the specified command with GameMode enabled to optimize system performance for gaming.",


    // Proton Environment Variables
    "PROTON_USE_WINED3D": "Forces Proton to use WineD3D instead of Vulkan for rendering.",
    "PROTON_NO_ESYNC": "Disables Esync to avoid compatibility issues.",
    "PROTON_NO_FSYNC": "Disables Fsync to avoid compatibility issues.",
    "PROTON_DUMP_DEBUG_COMMANDS": "Prints debug commands for troubleshooting.",
    "PROTON_LOG": "Enables Proton logging for detailed error and debug messages.",
    "DXVK_HUD": {
        "description": "Displays an on-screen HUD for DXVK performance metrics.",
        "template": "This will enable the DXVK HUD with the option '{value}'."
    },
    "VK_ICD_FILENAMES": {
        "description": "Specifies the path to Vulkan ICD (Installable Client Driver) files.",
        "template": "This will use the Vulkan ICD file located at '{value}'."
    },
    "VK_LAYER_PATH": {
        "description": "Sets the path for Vulkan layer configurations.",
        "template": "This will use the Vulkan layer path '{value}'."
    },

    // SDL Environment Variables
    "SDL_VIDEODRIVER": {
        "description": "Sets the video backend for SDL applications.",
        "template": "This will set the SDL video driver to '{value}'."
    },
    "SDL_AUDIODRIVER": {
        "description": "Sets the audio backend for SDL applications.",
        "template": "This will set the SDL audio driver to '{value}'."
    },

    // Steam Command-Line Options
    "%command%": "A placeholder for the actual game command in Steam.",
    "-console": "Launches Steam with the console enabled for debugging.",
    "-silent": "Runs Steam silently without showing the main window.",
    "-noverifyfiles": "Skips file verification during startup.",
    "-nobootstrapupdate": "Disables Steam bootstrap updates.",
    "-skiplicense": "Skips the license agreement dialog during launch.",
    "-novid": "Skips introductory videos when launching the game.",
    "-fullscreen": "Forces the game to launch in fullscreen mode.",
    "-windowed": "Forces the game to launch in windowed mode.",
    "-borderless": "Forces the game to launch in borderless windowed mode.",
    "-high": "Sets the game process priority to high.",
    "-dx11": "Forces the game to use DirectX 11.",
    "-dx12": "Forces the game to use DirectX 12.",
    "-vulkan": "Forces the game to use the Vulkan renderer.",
    "-opengl": "Forces the game to use the OpenGL renderer.",
    
    // Common Game Parameters
    "-nosound": "Disables all sound in the game.",
    "-nointro": "Skips introductory sequences or logos.",
    "-lang": {
        "description": "Sets the game language.",
        "template": "This will set the game language to '{value}'."
    },
    "-log": "Enables logging for the game.",
    "-dev": "Enables developer mode for the game."
};
