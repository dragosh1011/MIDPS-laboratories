using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Calculator.Core
{
    public class calculator
    {
        public double adunare(double numar1, double numar2) { return numar1+numar2; }
        public double scadere(double numar1, double numar2) { return numar1-numar2; }
        public double inmultire(double numar1, double numar2) { return numar1*numar2; }
        public double putere(double numar1, double numar2) { return (double)Math.Pow(numar1,numar2); }
        public double radical(double numar1) { return (double)Math.Sqrt(numar1); }
        public double impartire(double numar1, double numar2) { return (double)numar1/numar2; }
        public double inversare(double numar1) { return numar1 * -1;}


    }
}
