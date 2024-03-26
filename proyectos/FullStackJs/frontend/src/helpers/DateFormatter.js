export default function formatDateNow() {
    const today = new Date(Date.now());
    const options = {
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit', 
    }; 

    const format = today.toLocaleDateString('es', options).split("/"); 

    return `${format[2]}-${format[1]}-${format[0]}`
}