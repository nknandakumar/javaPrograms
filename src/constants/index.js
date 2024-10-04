export const javaPrograms = [
    {
      id: 1,
      name: "Hello World ..",
      code: `import java.io.*;

class Jpro1 {
    public static void main(String[] args) throws Exception {
        int a=15 , b=10  ;
        float  c=10.4F , d=15.5F ;
        try {
             a=Integer.parseInt(args[0]);
             b=Integer.parseInt(args[1]);
             c=Float.parseFloat(args[2]);
             d=Float.parseFloat(args[3]);
        } catch (Exception e) {
            System.out.println(a+" "+b+" " +c+" "+d);
             add(a,b);
             add(c,d);
            
        }
    }
        public static void add(int a,int b){
            int sum = a+b;
            System.out.println("The Sum  Int is: "+sum);
        }
        
           public static void add(float c,float d){
            float sum = c+d;
            System.out.println("The Sum Float is: "+sum);
        }
    
}
  `,
    },
    {
      id: 2,
      name: "Factorial Program",
      code: `
         import java.io.*;

class JAddSub {
   static   int num1 = 25 , num2 = 5 ;
   public static void add(){
       System.out.println("Addition : "+(num1+num2));
   }
   public static void sub(){
       System.out.println("Addition : "+(num1-num2));
   }
   public static void main(String args[]){
       JAddSub obj1 = new JAddSub();
       mulDiv obj2 = new mulDiv();
       obj1.add();
       obj1.sub();
       obj2.mult();
       obj2.div();
   }
}

class mulDiv extends JAddSub{
      public static void mult(){
       System.out.println("Addition : "+(num1*num2));
   }
   public static void div(){
       System.out.println("Addition : "+(num1/num2));
   }
}
      `,
    },
    {
        id: 3,
        name: "Program 3",
        code: `
         import java.io.* ;
           class Jprog3 {
             static int num1 ;
             int num2;
         public static void main(String args[]){
        Jprog3.num1 = 30 ;
        Jprog3 obj1 = new Jprog3();
        Jprog3 obj2 = new Jprog3();
        obj1.num2 = 44 ;
        obj2.num2 = 54 ;
        
        System.out.println(" \n num1 = "+  Jprog3.num1+"  \n   obj1.num2 = "+ obj1.num2+"  \n   obj2.num2 = "+ obj2.num2);
        System.out.println(" After changing class variable num1 ");
        Jprog3.num1 = 42 ;
        System.out.println("  \n  num1 = "+  Jprog3.num1+"   \n  obj1.num2 = "+ obj1.num2+"  \n   obj2.num2 = "+ obj2.num2);
           obj1.num2 = 56 ;
        System.out.println(" After changing obj1.num2  ");
           System.out.println("  \n  num1 = "+  Jprog3.num1+"   \n  obj1.num2 = "+ obj1.num2+"  \n   obj2.num2 = "+ obj2.num2);
              obj2.num2 = 67 ;
                      System.out.println(" After changing obj2.num2  ");
           System.out.println("  \n  num1 = "+  Jprog3.num1+"  \n   obj1.num2 = "+ obj1.num2+"  \n   obj2.num2 = "+ obj2.num2);
    }
}
        `,
      },
      {
        id: 4,
        name: "Program 4",
        code: `
           import java.io.*;

class Jprog5 {
    public static void main(String args[]) throws IOException {
        int n;
        System.out.println("Enter the Number of Students: ");
        DataInputStream in = new DataInputStream(System.in);
        n = Integer.parseInt(in.readLine());
        student arr[] = new student[n];
        for (int i = 0; i < n; i++) {
            System.out.println("Enter the ID, Name, Marks of sub1, sub2, and sub3 for student " + (i + 1));
            arr[i] = new student(0, "");
            arr[i].read(Integer.parseInt(in.readLine()), in.readLine(), Integer.parseInt(in.readLine()), Integer.parseInt(in.readLine()), Integer.parseInt(in.readLine()));
        }
        for (int i = 0; i < n; i++) {
            arr[i].display();
        }
    }
}

class student {
    public int id, sub1, sub2, sub3;
    public float totalMarks;
    public String name;

    student(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public void read(int id, String name, int sub1, int sub2, int sub3) {
        this.id = id;
        this.name = name;
        this.sub1 = sub1;
        this.sub2 = sub2;
        this.sub3 = sub3;
        if (this.sub1 < 50 || this.sub2 < 50 || this.sub3 < 50) {
            this.totalMarks = 0.0F;
        } else {
            this.totalMarks = this.sub1 + this.sub2 + this.sub3;
        }
    }

    public void display() {
        System.out.println("Student ID = " + id + "\nStudent Name = " + name);
        System.out.println("Total Marks = " + totalMarks);
    }
}

        `
                 
      },
      {
        id: 5,
        name: "Program 5",
        code: `
             import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

class Employee {
    String ename;
    LocalDate doa;

    public Employee(String ename, LocalDate doa) {
        this.ename = ename;
        this.doa = doa;
    }

    public void display() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        System.out.println("Employee Name = " + ename + " Date of Appointment = " + doa.format(formatter));
    }
}

class Jprog6 {
    public static void main(String args[]) {
        Employee eobj[] = new Employee[8];
        eobj[0] = new Employee("AAA", LocalDate.of(2022, 5, 3));
        eobj[1] = new Employee("ABB", LocalDate.of(2021, 9, 29));
        eobj[2] = new Employee("BBB", LocalDate.of(2017, 8, 15));
        eobj[3] = new Employee("CCC", LocalDate.of(2016, 7, 9));
        eobj[4] = new Employee("DDD", LocalDate.of(2015, 6, 3));
        eobj[5] = new Employee("RRR", LocalDate.of(2014, 5, 1));
        eobj[6] = new Employee("WWW", LocalDate.of(2013, 4, 4));
        eobj[7] = new Employee("QQQ", LocalDate.of(2012, 3, 7));

        System.out.println("List of Employees:");
        for (Employee e : eobj) {
            e.display();
        }

        // Sorting employees by date of appointment in seniority order
        for (int i = 0; i < eobj.length - 1; i++) {
            for (int j = i + 1; j < eobj.length; j++) {
                if (eobj[i].doa.isAfter(eobj[j].doa)) {
                    Employee temp = eobj[i];
                    eobj[i] = eobj[j];
                    eobj[j] = temp;
                }
            }
        }

        System.out.println("\nList of Employees in seniority order:");
        for (Employee e : eobj) {
            e.display();
        }
    }
}

          `
      },
      {
        id: 6,
        name: "Program 6",
        code: `
             import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

class FM extends JFrame implements ActionListener
{
    JButton b1,b2;
    FM(){
        this.setLayout(null);
        b1 = new JButton("Father");
        b2 = new JButton("Mother");
        b1.setBounds(100,05,80,50);
        b2.setBounds(200,05,80,50);
        this.add(b1);
        this.add(b2);
        b1.addActionListener(this);
        b2.addActionListener(this);
    }
        public void actionPerformed(ActionEvent ae){
            if(ae.getSource()==b1){
                JOptionPane.showMessageDialog(this,"Name of the Fahter : ABC \n Age :51 \n Designation : Police");
            }
            if(ae.getSource()==b2){
                JOptionPane.showMessageDialog(this,"Name of the Mother : XYZ \n Age :50 \n Designation : Lawyer");
            }
        }
}

class JprogB4 {
    public static void main(String args[]){
        FM obj = new FM();
        obj.setBounds(200,200,800,600);
        obj.setResizable(false);
        obj.setVisible(true);
    }
}
        `
      },
      {
        id: 7,
        name: "Program 7 pb6 key",
        code: `
               import java.awt.*;
import java.applet.*;
import java.awt.event.*;

/*  <applet code="pb6" width="500" height="500"> </applet> */
public class pb6 extends Applet implements KeyListener {
    String msg = "Press M or A or E or N ";
    int X = 10, Y = 20;
    Font f1;

    public void init() {
        f1 = new Font("Georgia", Font.BOLD, 22);
        addKeyListener(this);
        setFocusable(true); // Ensure the Applet is focusable to capture key events
    }

    // Implementing the required methods from KeyListener
    public void keyPressed(KeyEvent ke) {
        int key = ke.getKeyCode();
        switch (key) {
            case KeyEvent.VK_M:
                msg = "Good Morning!";
                break;
            case KeyEvent.VK_A:
                msg = "Good Afternoon!";
                break;
            case KeyEvent.VK_E:
                msg = "Good Evening!";
                break;
            case KeyEvent.VK_N:
                msg = "Good Night!";
                break;
        }
        repaint();
    }

    public void keyReleased(KeyEvent ke) {
        showStatus("Key Up");
    }

    public void keyTyped(KeyEvent ke) {
        // Not handling keyTyped events for this example
    }

    public void paint(Graphics g) {
        g.setFont(f1);
        g.setColor(Color.blue);
        g.drawString(msg, X, Y);
    }
}

        `
      },
      {
        id: 8,
        name: "Program 8 pb8 ",
        code: `
                 import java.awt.*;
class pb8{
    pb8(){
        Frame f = new Frame("Menu bar with pull down menu");
        MenuBar mb = new  MenuBar();
        Menu menu = new Menu("Main Menu");
        Menu subMenu = new Menu("Sub Menu");
        MenuItem i1 = new MenuItem(" Item 1");
        MenuItem i2 = new MenuItem(" Item 2");
        MenuItem i3 = new MenuItem(" Item 3");
        MenuItem i4 = new MenuItem(" Item 4");
        MenuItem i5 = new MenuItem(" Item 5");
        menu.add(i1);
        menu.add(i2);
        menu.add(i3);
        subMenu.add(i4);
        subMenu.add(i5);
        menu.add(subMenu);
        mb.add(menu);
        f.setMenuBar(mb);
        f.setVisible(true);
        f.setLayout(null);
        f.setSize(800,1000);
        f.setBackground(Color.red);
    }
    public static void main(String args[]){
        pb8 obj = new pb8();
    }
}

        `
      }
  ];
  
 