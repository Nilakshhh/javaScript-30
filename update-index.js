const Input = document.querySelectorAll(".controls input");

function handleUpdate(){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

Input.forEach(input => input.addEventListener('change', handleUpdate));
Input.forEach(input => input.addEventListener('mousemove', handleUpdate));