// Function to parse and explain parameters
function parseParameters(input) {
    const words = input.split(/\s+/);
    const explanationContainer = $("#explanationContainer");
    explanationContainer.empty();

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        if (explanations[word]) {
            if (typeof explanations[word] === "object") {
                // Check if the next word is a valid value
                if (i + 1 < words.length && !words[i + 1].startsWith("-")) {
                    let value = words[i + 1];
                    let description = explanations[word].description;
                    let template = explanations[word].template.replace("{value}", value);

                    explanationContainer.append(`
                        <div class="card parameter-card">
                            <div class="card-body">
                                <strong>${word} ${value}</strong>: ${description}
                                <br>
                                ${template}
                            </div>
                        </div>
                    `);

                    i++; // Skip the next word since it's the value
                } else {
                    // Missing value error
                    explanationContainer.append(`
                        <div class="card parameter-card text-danger">
                            <div class="card-body">
                                <strong>Error:</strong> The parameter <strong>${word}</strong> is missing a required value.
                            </div>
                        </div>
                    `);
                }
            } else {
                // Simple explanation for parameters without values
                explanationContainer.append(`
                    <div class="card parameter-card">
                        <div class="card-body">
                            <strong>${word}</strong>: ${explanations[word]}
                        </div>
                    </div>
                `);
            }
        } else if (word.includes("=")) {
            // Handle environment variables like SDL_VIDEODRIVER=wayland
            const [key, value] = word.split("=");
            if (explanations[key]) {
                let description = explanations[key].description;
                let template = explanations[key].template.replace("{value}", value);

                explanationContainer.append(`
                    <div class="card parameter-card">
                        <div class="card-body">
                            <strong>${word}</strong>: ${description}
                            <br>
                            ${template}
                        </div>
                    </div>
                `);
            } else {
                // Unknown environment variable
                explanationContainer.append(`
                    <div class="card parameter-card text-warning">
                        <div class="card-body">
                            <strong>Warning:</strong> Unknown environment variable <strong>${word}</strong>.
                        </div>
                    </div>
                `);
            }
        } else if (word.startsWith("-")) {
            // Unknown parameter
            explanationContainer.append(`
                <div class="card parameter-card text-warning">
                    <div class="card-body">
                        <strong>Warning:</strong> Unknown parameter <strong>${word}</strong>.
                    </div>
                </div>
            `);
        }
    }
}

// Event listener for the button
$("#parseButton").click(function () {
    const input = $("#parameterInput").val();
    if (input.trim() === "") {
        alert("Please enter some launch parameters.");
        return;
    }
    parseParameters(input);
    updateURLWithParameters();
});

$("#loadExampleButton").click(function () {
    const exampleCommand = "gamescope -W 2048 -H 1152 --fullscreen -o 0 --force-grab-cursor gamemoderun -- %command%";
    $("#parameterInput").val(exampleCommand);
    parseParameters(exampleCommand);
});


// Dark mode toggle derps
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('darkModeToggle');
    const body = document.body;
    const textInput = document.getElementById('parameterInput');

    // Function to apply dark mode styles
    function applyDarkMode(isDark) {
        if (isDark) {
            body.classList.add('dark-mode');
            toggleButton.textContent = 'Light Mode';
            textInput.classList.add('dark-mode-input');
        } else {
            body.classList.remove('dark-mode');
            toggleButton.textContent = 'Dark Mode';
            textInput.classList.remove('dark-mode-input');
        }
    }

    // Load the user's theme preference
    const isDarkMode = localStorage.getItem('theme') === 'dark';
    applyDarkMode(isDarkMode);

    // Toggle button click event
    toggleButton.addEventListener('click', () => {
        const isDark = body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        applyDarkMode(isDark);
    });

    loadParametersFromURL();
});

// Function to update the URL with the current parameters
// TODO: %command% encoding is breaking this feature.
function updateURLWithParameters() {
    // const textInput = document.getElementById('parameterInput');
    // const params = textInput.value;
    // if (params.trim() === "") return; // Don't update the URL if the input is empty
    // const encodedParams = encodeURIComponent(params);
    // const newURL = `${window.location.origin}${window.location.pathname}?params=${encodedParams}`;
    // window.history.replaceState(null, '', newURL);
}

// Function to load parameters from the URL
function loadParametersFromURL() {
    // const textInput = document.getElementById('parameterInput');
    // const urlParams = new URLSearchParams(window.location.search);
    // const params = urlParams.get('params');
    
    // if (params) {
    //     try {
    //         textInput.value = decodeURIComponent(params);
    //     } catch (error) {
    //         console.error('Error decoding parameters:', error);
    //         alert('Failed to load parameters due to invalid encoding.');
    //     }
    // }
}

// Load parameters when the page loads
// loadParametersFromURL();

// Update the URL when the parse button is clicked
// parseButton.addEventListener('click', updateURLWithParameters);