using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Calculator.GUI
{
    public partial class Form1 : Form
    {
        Core.calculator calculator;
        public string result;
        private double numar1=0;
        private double numar2=0;
        double value=0;
        private string operation;
        Boolean opertie_apasat = false;
        public Form1()
        {
            InitializeComponent();
        }

        private void clickonumber(object sender, EventArgs e)
        {
            if ((textBox1.Text.Equals("0")) || opertie_apasat)
            {
                textBox1.Clear();
            }
            opertie_apasat=false;

            
            Button button = (Button)sender;

            if((button.Text.Equals("."))){
                if (!textBox1.Text.Contains("."))
                {
                    textBox1.Text = textBox1.Text + button.Text;
                }

            }
            else
            textBox1.Text = textBox1.Text + button.Text;
           
        }

        private void operatie(object sender, EventArgs e)
        {
            
            Button button = (Button)sender;
            if (numar1 != 0 && !opertie_apasat)
            {
                
                button14.PerformClick() ;
                
                operation = button.Text;
                opertie_apasat = true;
                label1.Text = numar1 + " " + operation;
            }
            else { 
            operation = button.Text;
            numar1 = Double.Parse(textBox1.Text);
            opertie_apasat = true;
            label1.Text = numar1 + " " + operation;
}
        }

         void button17_Click(object sender, EventArgs e)
        {
            textBox1.Text = "0";
            label1.Text = "";
            numar1 = 0;
            numar2 = 0;
           
        }

        private void button21_Click(object sender, EventArgs e)
        {
            String res = textBox1.Text;

            if (textBox1.Text.Length < 2) { button17_Click(sender, e);}
            else { textBox1.Text=textBox1.Text.Remove(textBox1.Text.Length - 1); }

         
        }

        private void button22_Click(object sender, EventArgs e)
        {
            textBox1.Text = "0";
        }

        private void button14_Click(object sender, EventArgs e)
        {
            numar2 = Double.Parse(textBox1.Text);
           
            switch (operation)
            {        
                case "+": textBox1.Text=(calculator.adunare(numar1,numar2)).ToString(); break;
                case "*": textBox1.Text = (calculator.inmultire(numar1, numar2)).ToString(); break;
                case "/": textBox1.Text = (calculator.impartire(numar1, numar2)).ToString(); break;
                case "-": textBox1.Text = (calculator.scadere(numar1, numar2)).ToString(); break;
                case "^": textBox1.Text = (calculator.putere(numar1, numar2)).ToString(); break;
                default: break;
              
           
            }
            label1.Text = "";
            numar1 = Double.Parse(textBox1.Text);
            operation = "";
            
        }

        private void Form1_Load(object sender, EventArgs e)
        {
           calculator = new Core.calculator();
        }

        private void button19_Click(object sender, EventArgs e)
        {
            value = Double.Parse(textBox1.Text);
            textBox1.Text = (calculator.inversare(value)).ToString();
            value = Double.Parse(textBox1.Text);
            if (opertie_apasat) { label1.Text = value + " " + operation; }
        }

        private void button18_Click(object sender, EventArgs e)
        {
            value = Double.Parse(textBox1.Text);
            textBox1.Text = (calculator.radical(value)).ToString();
            
        }
      
    }
}
