import React, { useState } from 'react';

// Substituindo a função 'cn' para concatenar classes de forma simples
const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
};

const tabData = [
    {
        id: 'loaded-language',
        label: 'Linguagem Carregada',
        title: 'Linguagem Carregada',
        description: 'Linguagem carregada são palavras ou frases que, além de seu significado literal, possuem fortes conotações emocionais, positivas ou negativas. O objetivo é influenciar a opinião do interlocutor, apelando para seus sentimentos em vez de apresentar argumentos lógicos.',
        positiveExamples: [
            { text: 'Líder visionário', description: 'Sugere alguém com ideias inovadoras e a capacidade de guiar outros.' },
            { text: 'Reforma progressista', description: 'Implica em mudanças positivas e modernizadoras.' },
            { text: 'Militante engajado', description: 'Descreve alguém dedicado a uma causa importante.' },
            { text: 'Servidor público dedicado', description: 'Enfatiza o comprometimento com o bem público.' },
            { text: 'Investimento estratégico', description: 'Sugere que o gasto é bem planejado e trará retornos.' },
        ],
        negativeExamples: [
            { text: 'Ditador', description: 'Evoca opressão, tirania e abuso de poder.' },
            { text: 'Desmonte', description: 'Implica em destruição, caos e consequências negativas.' },
            { text: 'Terrorista', description: 'Carrega uma forte conotação negativa, associada a violência e medo.' },
            { text: 'Burocrata', description: 'Sugere ineficiência, rigidez e falta de falta de empatia.' },
            { text: 'Esbanjador', description: 'Implica em desperdício, má gestão e irresponsabilidade.' },
        ],
        examplePositive: { title: "Exemplo Positivo", text: 'O líder visionário propôs soluções inovadoras para os problemas da cidade.' },
        exampleNegative: { title: "Exemplo Negativo", text: 'O ditador implementou políticas que levaram o país ao caos.' },
    },
    {
        id: 'dismissive-accounts',
        label: 'Relatos Dismissivos',
        title: 'Relatos Dismissivos',
        description: '"Dismissive accounts" são relatos ou descrições de eventos ou argumentos que os desvalorizam ou minimizam sua importância. Esse tipo de linguagem é frequentemente usado para desqualificar a opinião de alguém ou evitar o engajamento com ideias ou preocupações legítimas.',
        positiveExamples: [
            { text: 'Preocupação da mídia', description: 'Indica que a mídia está cobrando um assunto que pode ser motivo de preocupação, sem necessariamente descartar a validade da preocupação.' },
            { text: 'Reclamações de uma minoria', description: 'Reconhece que há reclamações, mas as situa em um contexto de serem de um grupo específico.' },
            { text: 'Teoria não comprovada', description: 'Aponta a falta de evidências robustas, mas sem descartar completamente a possibilidade.' },
            { text: 'Visão política', description: 'Reconhece que a questão pode ter implicações políticas, mas sem necessariamente descartar sua importância.' },
            { text: 'Você está sendo dramático', description: 'Sugere que a pessoa está exagerando, mas abre espaço para discutir o real tamanho do problema.' },
        ],
        negativeExamples: [
            { text: 'É só histeria da mídia.', description: '' },
            { text: 'São apenas reclamações de mimados.', description: '' },
            { text: 'Isso não passa de teoria da conspiração.', description: '' },
            { text: 'É tudo politicagem.', description: '' },
            { text: 'Você está exagerando.', description: '' },
            { text: 'Isso não é um problema real.', description: '' },
            { text: 'São só palavras.', description: '' },
            { text: 'Você não entende a situação real.', description: '' },
            { text: 'Você está sendo muito sensível.', description: '' },
            { text: 'Deixa de ser dramático.', description: '' },
        ],
        examplePositive: { title: "Exemplo Menos Dismissivo", text: 'A preocupação da mídia com o aumento da inflação reflete um problema econômico que precisa ser analisado.' },
        exampleNegative: { title: "Exemplo Dismissivo", text: 'As críticas ao projeto são apenas reclamações de mimados e não devem ser levadas em conta.' },
    },
    {
        id: 'unrepresentative-data',
        label: 'Dados Não Representativos',
        title: 'Dados Não Representativos',
        description: 'Dados não representativos são aqueles que não refletem com precisão a população ou o fenômeno que se pretende estudar. O uso de dados não representativos pode levar a conclusões falaciosas e argumentos inválidos.',
        positiveExamples: [
            { text: 'Pesquisa eleitoral nacional com amostra diversificada', description: 'Uma pesquisa que inclui eleitores de diferentes regiões, níveis de renda, escolaridade e grupos étnicos para prever o resultado das eleições.' },
            { text: 'Estudo clínico com grupo de controle', description: 'Um estudo sobre um novo medicamento que inclui um grupo de controle e participantes de ambos os sexos, diferentes faixas etárias e etnias.' },
            { text: 'Avaliação de produto com feedback de usuários diversificado', description: 'A avaliação do desempenho de um produto com base no feedback de um grande número de clientes com diferentes perfis e hábitos de uso.' },
            { text: 'Cálculo da média de altura com amostra aleatória', description: 'Medir a altura de um grande número de pessoas selecionadas aleatoriamente na população.' },
            { text: 'Análise de popularidade musical com dados de vendas e streaming', description: 'Concluir a popularidade de um tipo de música com base em dados de vendas de diversas lojas e plataformas de streaming, abrangendo diferentes públicos.' },
        ],
        negativeExamples: [
            { text: 'Uma pesquisa eleitoral realizada apenas em um bairro rico de uma cidade', description: 'Para prever o resultado das eleições em todo o país.' },
            { text: 'Um estudo sobre a eficácia de um novo medicamento realizado apenas em homens', description: 'E cujos resultados são generalizados para toda a população, incluindo mulheres.' },
            { text: 'A análise do desempenho de um produto com base no feedback de apenas um pequeno grupo de clientes', description: 'Que são entusiastas da marca.' },
            { text: 'Calcular a média de altura de uma população com base em uma amostra composta apenas por jogadores de basquete.', description: '' },
            { text: 'Concluir que um determinado tipo de música é o mais popular do país com base nos dados de vendas de apenas uma loja', description: 'Especializada em um nicho musical.' },
        ],
        examplePositive: { title: "Exemplo de Dado Representativo", text: 'O estudo clínico demonstra a eficácia do medicamento.' },
        exampleNegative: { title: "Exemplo de Dado Não Representativo", text: 'A pesquisa mostra que o novo imposto é amplamente apoiado pela população.' },
    },
];

const argumentRules = [
    { id: 1, title: 'Regra 1', text: 'Distinga premissas e conclusão.', example: 'Exemplo: "Todos os homens são mortais. Sócrates é homem. Portanto, Sócrates é mortal." (Premissas: "Todos os homens são mortais" e "Sócrates é homem"; Conclusão: "Sócrates é mortal").', rarity: 'common', strength: 1 },
    { id: 2, title: 'Regra 2', text: 'Apresente suas ideias em ordem natural.', example: 'Exemplo: "Reduzimos a taxa de juros e, em seguida, o desemprego caiu. Portanto, reduzir a taxa de juros leva à queda do desemprego."', rarity: 'common', strength: 2 },
    { id: 3, title: 'Regra 3', text: 'Comece com premissas confiáveis.', example: 'Exemplo: Em vez de "Se Deus existe, há moralidade; Deus existe; logo, há moralidade.", comece com uma premissa confiável como "Há evidências de que a vacinação reduz a propagação de doenças."', rarity: 'uncommon', strength: 3 },
    { id: 4, title: 'Regra 4', text: 'Use linguagem precisa, específica e concreta.', example: 'Exemplo: Em vez de "A situação é ruim.", diga "A taxa de desemprego em São Paulo é de 12%."', rarity: 'common', strength: 2 },
    { id: 5, title: 'Regra 5', text: 'Evite linguagem carregada.', example: 'Exemplo: Em vez de "O político corrupto roubou milhões.", diga "O político desviou R$ 2 milhões dos cofres públicos.".', rarity: 'common', strength: 3 },
    { id: 6, title: 'Regra 6', text: 'Use termos consistentes.', example: 'Exemplo: Se você está falando sobre "o paciente" em uma parte do argumento, continue se referindo a ele como "o paciente" e não mude para "o indivíduo" sem motivo.', rarity: 'common', strength: 1 },
    { id: 7, title: 'Regra 7', text: 'Use apenas uma afirmação por oração.', example: 'Exemplo: Em vez de "A inflação subiu e os salários diminuíram, o que causou descontentamento generalizado.", diga "A inflação subiu. Os salários diminuíram. Isso causou descontentamento generalizado."', rarity: 'common', strength: 1 },
    { id: 8, title: 'Regra 8', text: 'Use argumentos com premissas e conclusão interligadas.', example: 'Exemplo: "A maioria dos brasileiros apoia o porte de armas. Se a maioria dos brasileiros apoia o porte de armas, então o porte de armas deve ser legalizado. Portanto, o porte de armas deve ser legalizado."', rarity: 'uncommon', strength: 4 },
    { id: 9, title: 'Regra 9', text: 'Generalize de uma amostra representativa.', example: 'Exemplo: Para afirmar que a maioria dos estudantes universitários apoia o ensino online, realize uma pesquisa com estudantes de diversas universidades, cursos e regiões, e não apenas com estudantes de uma única universidade.', rarity: 'uncommon', strength: 4 },
    { id: 10, title: 'Regra 10', text: 'A proporção da amostra deve ser proporcional à população.', example: 'Exemplo: Se 60% da população de uma cidade é urbana e 40% é rural, sua amostra de pesquisa deve refletir essa proporção.', rarity: 'uncommon', strength: 4 },
    { id: 11, title: 'Regra 11', text: 'Cite fontes.', example: 'Exemplo: "Segundo o IBGE (2023), a taxa de desemprego no Brasil é de 8,5%."', rarity: 'common', strength: 2 },
    { id: 12, title: 'Regra 12', text: 'Procure fontes informadas.', example: 'Exemplo: Ao discutir a eficácia de uma vacina, cite estudos publicados em revistas médicas renomadas e opiniões de especialistas em imunologia, em vez de sites de notícias sem credibilidade ou opiniões de leigos nas redes sociais.', rarity: 'uncommon', strength: 3 },
    { id: 13, title: 'Regra 13', text: 'Use citações diretas concisas.', example: 'Exemplo: Ao invés de parafrasear longamente, use: "Como disse o autor, \'a educação é a base da sociedade\' (Silva, 2020, p. 25)."', rarity: 'common', strength: 1 },
    { id: 14, title: 'Regra 14', text: 'Seja imparcial.', example: 'Exemplo: Apresente argumentos a favor e contra uma medida, em vez de apenas destacar os pontos positivos.', rarity: 'uncommon', strength: 3 },
    { id: 15, title: 'Regra 15', text: 'Não atribua certeza a uma conclusão que a premissa não contempla.', example: 'Exemplo: Se a premissa é "A maioria dos políticos é desonesta", a conclusão não pode ser "Todos os políticos são desonestos".', rarity: 'uncommon', strength: 4 },
    { id: 16, title: 'Regra 16', text: 'Explore a condição.', example: 'Exemplo: "Se chover, o jogo será cancelado. Choveu. Logo, o jogo foi cancelado."', rarity: 'common', strength: 2 },
    { id: 17, title: 'Regra 17', text: 'Escolha exemplos com cuidado.', example: 'Exemplo: Para defender a ideia de que o investimento em energia solar é benéfico, apresente exemplos de países ou empresas que obtiveram sucesso com essa tecnologia, com dados sobre a redução de custos e impactos ambientais positivos.', rarity: 'uncommon', strength: 3 },
    { id: 18, title: 'Regra 18', text: 'A causa mais provável.', example: 'Exemplo: Ao investigar a causa de um incêndio, considere todas as possibilidades (curto-circuito, vazamento de gás, etc.) e apresente a mais provável com base em evidências.', rarity: 'uncommon', strength: 4 },
    { id: 19, title: 'Regra 19', text: 'Argumentos dedutivos.', example: 'Exemplo: "Todos os gatos são mamíferos. Meu animal de estimação é um gato. Portanto, meu animal de estimação é um mamífero."', rarity: 'uncommon', strength: 4 },
    { id: 20, title: 'Regra 20', text: 'Se A então B. A. Portanto, B.', example: 'Exemplo: "Se você investir na bolsa de valores, você terá a chance de obter retornos elevados. Você investiu na bolsa de valores. Portanto, você tem a chance de obter retornos elevados."', rarity: 'uncommon', strength: 4 },
    { id: 21, title: 'Regra 21', text: 'Se A então B. Não B. Portanto, não A.', example: 'Exemplo: "Se o documento estivesse assinado, ele seria válido. O documento não é válido. Portanto, o documento não está assinado."', rarity: 'uncommon', strength: 4 },
];

const BolhivroLe = () => {
    const [activeTab, setActiveTab] = useState(tabData[0].id);

    const renderTabContent = (tabId) => { // Removido o tipo : string
        const tab = tabData.find(t => t.id === tabId);
        if (!tab) return null;

        return (
            <>
                <h2 className="text-xl font-semibold mb-4" style={{ color: '#e65100' }}>{tab.title}</h2>
                <p className="mb-4 text-gray-700">{tab.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-2 text-green-700">Exemplos Positivos</h3>
                        <ul className="list-disc list-inside space-y-2">
                            {tab.positiveExamples.map((example, index) => (
                                <li key={index} className="text-gray-800">
                                    <strong>{example.text}:</strong> {example.description}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2 text-red-700">Exemplos Negativos</h3>
                        <ul className="list-disc list-inside space-y-2">
                            {tab.negativeExamples.map((example, index) => (
                                <li key={index} className="text-gray-800">
                                    <strong>{example.text}:</strong> {example.description}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-md p-4 shadow-md flex flex-col">
                        <h4 className="text-md font-semibold text-gray-800 mb-2 text-blue-700">{tab.examplePositive.title}:</h4>
                        <p className="text-gray-700">{tab.examplePositive.text}</p>
                    </div>
                    <div className="bg-gray-50 rounded-md p-4 shadow-md flex flex-col">
                        <h4 className="text-md font-semibold text-gray-800 mb-2 text-blue-700">{tab.exampleNegative.title}:</h4>
                        <p className="text-gray-700">{tab.exampleNegative.text}</p>
                    </div>
                </div>
            </>
        );
    };

    return (
        <div className="bg-gray-100">
            <header className="bg-blue-900 text-white py-4 text-center rounded-b-md shadow-md" style={{ backgroundColor: '#1a5294' }}>
                <h1 className="text-2xl font-semibold">Bolhivro Lê: A Rulebook for Arguments</h1>
            </header>

            <main className="container mx-auto mt-6 p-4">
                <div className="mb-8">
                    <p className="text-gray-700 text-lg">
                        Este site, inspirado em conceitos do livro "A Rulebook for Arguments", explora o uso de linguagem carregada e dados não representativos em argumentos e discussões. Entender esses conceitos é crucial para avaliar informações de forma crítica e construir argumentos sólidos.
                    </p>
                </div>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {argumentRules.map(rule => (
                        <Card key={rule.id} rule={rule} />
                    ))}
                </div>
                <div className="mt-8 text-sm text-gray-500">
                    <p><strong>Raridade dos Cards:</strong></p>
                    <ul className="list-disc list-inside">
                        <li>Comum: Símbolo ●, Fundo Cinza</li>
                        <li>Incomum: Símbolo ◆, Fundo Verde</li>
                        <li>Raro: Símbolo ★, Fundo Azul</li>
                        <li>Mítico: Símbolo ✦, Fundo Roxo</li>
                    </ul>
                </div>

                <div className="tab-container rounded-md shadow-lg">
                    <div className="tab-buttons flex bg-gray-200 rounded-t-md">
                        {tabData.map(tab => (
                            <button
                                key={tab.id}
                                className={classNames( // Usando a função classNames
                                    "tab-button px-4 py-2 focus:outline-none text-gray-700",
                                    activeTab === tab.id
                                        ? 'active bg-orange-600 text-white'
                                        : 'hover:bg-orange-100'
                                )}
                                data-tab={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                style={{
                                    borderTopLeftRadius: tabData[0].id === tab.id ? '0.5rem' : '0',
                                    borderTopRightRadius: tabData[tabData.length - 1].id === tab.id ? '0.5rem' : '0',
                                }}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="tab-content p-6 rounded-b-md bg-white">
                        {renderTabContent(activeTab)}
                    </div>
                </div>
            </main>

            <footer className="bg-gray-800 text-white py-4 text-center rounded-t-md shadow-md mt-8">
                <p>© 2024 Linguagem Carregada e Dados Não Representativos. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
};

const Card = ({ rule }) => { // Removido o tipo : typeof argumentRules[0]
    const getRarityColor = (rarity) => { // Removido o tipo : string
        switch (rarity) {
            case 'common':
                return 'bg-gradient-to-br from-gray-100 to-gray-50 border-gray-200';
            case 'uncommon':
                return 'bg-gradient-to-br from-white to-green-50 border-green-200';
            case 'rare':
                return 'bg-gradient-to-br from-white to-blue-50 border-blue-200';
            case 'mythic':
                return 'bg-gradient-to-br from-white to-purple-50 border-purple-200';
            default:
                return 'bg-gradient-to-br from-white/10 to-white/5 border-white/10';
        }
    };

    const getRaritySymbol = (rarity) => { // Removido o tipo : string
        switch (rarity) {
            case 'common':
                return <span className="text-gray-700">●</span>;
            case 'uncommon':
                return <span className="text-green-700">◆</span>;
            case 'rare':
                return <span className="text-blue-700">★</span>;
            case 'mythic':
                return <span className="text-purple-700">✦</span>;
            default:
                return null;
        }
    };

    const getRuleRarity = (rule) => { // Removido o tipo : typeof argumentRules[0]
        if (rule.strength <= 2) {
            return 'common';
        } else if (rule.strength <= 3) {
            return 'uncommon';
        } else if (rule.strength <= 4) {
            return 'rare';
        } else {
            return 'mythic'
        }
    };

    const rarity = getRuleRarity(rule);
    const cardStyle = getRarityColor(rarity);

    return (
        <div className={classNames( // Usando a função classNames
            "rounded-lg border shadow-md p-4",
            cardStyle,
            "backdrop-blur-md",
            "shadow-lg",
            "hover:shadow-xl hover:scale-[1.01] transition-all duration-300",
            "flex flex-col h-full",
            "relative"
        )}>
            <div className="flex flex-col h-full">
                <h2 className="text-lg font-semibold text-gray-900 mb-2 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                    {rule.title}
                </h2>
                <p className="text-gray-700 flex-grow">{rule.text}</p>
                <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-end">
                    <p className="text-sm text-gray-600 italic">
                        Exemplo: <span className="font-normal text-gray-800">{rule.example}</span>
                    </p>
                    <div className="absolute top-2 right-2">
                        {getRaritySymbol(rarity)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BolhivroLe;

