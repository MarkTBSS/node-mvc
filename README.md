```
project-root/
├── src/
│ ├── config/
│ │ └── database.js
│ ├── controllers/
│ │ ├── userController.js
│ │ └── bookController.js
│ ├── models/
│ │ ├── userModel.js
│ │ └── bookModel.js
│ ├── routes/
│ │ ├── userRoutes.js
│ │ └── bookRoutes.js
│ ├── views/
│ │ └── exampleView.html
│ └── index.js
├── package.json
└── .env
```

MVC (Model-View-Controller)
Structure:

Model: Represents the data and business logic.
View: Represents the UI or presentation layer.
Controller: Handles user input and interacts with the model to update the view.
Flow:

User interacts with the View.
Controller processes the input and updates the Model.
Model notifies the View to update the UI.
Coupling:

Tight coupling between components.
Changes in one layer often require changes in others.
Use Case:

Suitable for simple applications with straightforward interactions.

ความแตกต่างระหว่าง MVC และ Hexagonal Architecture
MVC (Model-View-Controller)
โครงสร้าง:

Model: แสดงข้อมูลและตรรกะทางธุรกิจ
View: แสดงผล UI หรือชั้นการนำเสนอ
Controller: จัดการการป้อนข้อมูลของผู้ใช้และโต้ตอบกับ Model เพื่ออัปเดต View
การไหลของข้อมูล:

ผู้ใช้โต้ตอบกับ View
Controller ประมวลผลการป้อนข้อมูลและอัปเดต Model
Model แจ้งให้ View อัปเดต UI
การเชื่อมโยง:

การเชื่อมโยงที่แน่นระหว่างส่วนประกอบ
การเปลี่ยนแปลงในชั้นหนึ่งมักจะต้องการการเปลี่ยนแปลงในชั้นอื่น ๆ
กรณีการใช้งาน:

เหมาะสำหรับแอปพลิเคชันที่มีการโต้ตอบที่ไม่ซับซ้อน
