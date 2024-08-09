import EhiranImg from "assets/profile_rodriguez.jpg";
import CurriEhiran from "assets/CV_EHIRAN.pdf";

const users = [
    {
        id: 2,
        name: "Rodriguez Cuellar Ehiran Evenezer",
        email: "Rodriguez@example.com",
        password: "password123",
        imageUrl: EhiranImg,
        curriculumUrl: CurriEhiran,
    },
];

// Datos de estudiantes
const students = [
    { id: 1, name: "Juan Pérez", school: "School 1" },
    { id: 2, name: "María López", school: "School 2" },
    { id: 3, name: "Pedro González", school: "School 1" },
];

// Datos de tareas
const tasks = [
    {
        id: 1,
        name: "Tarea de Matemáticas",
        description: "Resolver problemas de álgebra",
        createdDate: "2024-08-01",
    },
    {
        id: 2,
        name: "Tarea de Historia",
        description: "Leer capítulo 5 del libro de historia",
        createdDate: "2024-08-03",
    },
    {
        id: 3,
        name: "Tarea de Ciencias",
        description: "Preparar un informe sobre el sistema solar",
        createdDate: "2024-08-07",
    },
];

// Datos de asignaciones de tareas a estudiantes
const assignments = [
    { id: 1, studentId: 1, taskId: 1, assignedDate: "2024-08-01" },
    { id: 2, studentId: 1, taskId: 2, assignedDate: "2024-08-02" },
    { id: 3, studentId: 2, taskId: 3, assignedDate: "2024-08-04" },
    { id: 4, studentId: 3, taskId: 1, assignedDate: "2024-08-05" },
];

// Datos de observaciones
const observations = [
    {
        id: 1,
        studentId: 1,
        text: "Juan ha mejorado en matemáticas.",
        createdDate: "2024-08-02",
    },
    {
        id: 2,
        studentId: 2,
        text: "María necesita trabajar más en historia.",
        createdDate: "2024-08-06",
    },
    {
        id: 3,
        studentId: 3,
        text: "Pedro mostró un gran interés en la ciencia.",
        createdDate: "2024-08-08",
    },
];

// Exporta estos datos para usarlos en tus componentes
export { users, students, tasks, assignments, observations };
