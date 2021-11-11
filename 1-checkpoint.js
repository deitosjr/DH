
function microondas(prato,temposelecionado)
    {
       function tempo(tempoprato, tempoinformado)
        {
            if(tempoinformado<tempoprato)
                {
                    console.log("tempo insuficiente");
                }
            else if (tempoinformado>(tempoprato*2) && tempoinformado<(tempoprato*3))
                {
                    console.log("A comida queimou! Prato pronto, bom apetite!");
                }
            else if (tempoinformado>(tempoprato*3))
                {
                    console.log("Kabumm!!! Prato pronto, bom apetite!");
                }
                else
                    {
                        console.log("Prato pronto, bom apetite!!!");
                    }
        }
      switch (prato) {
        case 1:
            tempo(10, temposelecionado);
          break;
        case 2:
            tempo(8, temposelecionado);
          break;
        case 3:
            tempo(15, temposelecionado);
          break;
        case 4:
            tempo(12, temposelecionado);
          break;
        case 5:
            tempo(8, temposelecionado);
          break;
        default:
            console.log("Prato inexistente!");
      }
    }
microondas(1,21);