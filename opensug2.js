const OpenSuggestion = (function() {
    let formElement, suggestionsWrapper, suggestionsList, onSelectSuggestion, borderRadius = '0';

    // 绑定输入和聚焦事件
    function bindInputEvents(inputElement) {
        const handleInput = event => {
            const value = event.target.value;
            try {
                window.via.requestSuggestions(value);
            } catch (error) {
                console.error(error);
            }
        };

        inputElement.addEventListener('input', handleInput);
        inputElement.addEventListener('focus', handleInput);
    }

    // 显示或更新建议列表
    function updateSuggestions(suggestions) {
        suggestionsList.innerHTML = ""; // 清空建议列表
        if (suggestions && suggestions.length) {
            suggestionsWrapper.style.display = "block";
            suggestions.forEach(suggestion => {
                const row = document.createElement('tr');
                const cell = document.createElement('td');
                cell.textContent = suggestion.toString();
                row.appendChild(cell);
                row.addEventListener('click', () => onSelectSuggestion(suggestion));
                suggestionsList.appendChild(row);
            });
        } else {
            hideSuggestions();
        }
    }

    // 隐藏建议列表
    function hideSuggestions() {
        if (suggestionsWrapper.style.display !== "none") {
            suggestionsWrapper.style.display = "none";
        }
    }

    return {
        bind: function(inputId, options, onSelect) {
            const inputElement = document.getElementById(inputId);
            if (!inputElement) {
                console.error("Input element not found");
                return;
            }

            if (options.radius) {
                borderRadius = options.radius;
            }
            onSelectSuggestion = onSelect;

            formElement = inputElement.closest('form');
            if (!formElement) {
                console.error("Must bind to an element within a form");
                return;
            }

            if (!suggestionsWrapper) {
                suggestionsWrapper = document.createElement('div');
                suggestionsWrapper.className = "opSug_wpr";
                suggestionsWrapper.style.display = "none";
                suggestionsList = document.createElement('tbody');
                const table = document.createElement('table');
                table.appendChild(suggestionsList);
                suggestionsWrapper.appendChild(table);
                formElement.appendChild(suggestionsWrapper);
            }

            bindInputEvents(inputElement);
            document.addEventListener('click', hideSuggestions, false);
        },
        pushSuggestions: updateSuggestions
    };
})();