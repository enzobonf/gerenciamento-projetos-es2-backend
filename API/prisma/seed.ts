import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function generate_essentials() {
	const ufs = await prisma.unidade_federacao.createMany({
		data: [
			{
				sigla: 'AC',
				nome: 'Acre',
			},
			{
				sigla: 'AL',
				nome: 'Alagoas',
			},
			{
				sigla: 'AP',
				nome: 'Amapá',
			},
			{
				sigla: 'AM',
				nome: 'Amazonas',
			},
			{
				sigla: 'BA',
				nome: 'Bahia',
			},
			{
				sigla: 'CE',
				nome: 'Ceará',
			},
			{
				sigla: 'DF',
				nome: 'Distrito Federal',
			},
			{
				sigla: 'ES',
				nome: 'Espírito Santo',
			},
			{
				sigla: 'GO',
				nome: 'Goiás',
			},
			{
				sigla: 'MA',
				nome: 'Maranhão',
			},
			{
				sigla: 'MT',
				nome: 'Mato Grosso',
			},
			{
				sigla: 'MS',
				nome: 'Mato Grosso do Sul',
			},
			{
				sigla: 'MG',
				nome: 'Minas Gerais',
			},
			{
				sigla: 'PA',
				nome: 'Pará',
			},
			{
				sigla: 'PB',
				nome: 'Paraíba',
			},
			{
				sigla: 'PR',
				nome: 'Paraná',
			},
			{
				sigla: 'PE',
				nome: 'Pernambuco',
			},
			{
				sigla: 'PI',
				nome: 'Piauí',
			},
			{
				sigla: 'RJ',
				nome: 'Rio de Janeiro',
			},
			{
				sigla: 'RN',
				nome: 'Rio Grande do Norte',
			},
			{
				sigla: 'RS',
				nome: 'Rio Grande do Sul',
			},
			{
				sigla: 'RO',
				nome: 'Rondônia',
			},
			{
				sigla: 'RR',
				nome: 'Roraima',
			},
			{
				sigla: 'SC',
				nome: 'Santa Catarina',
			},
			{
				sigla: 'SP',
				nome: 'São Paulo',
			},
			{
				sigla: 'SE',
				nome: 'Sergipe',
			},
			{
				sigla: 'TO',
				nome: 'Tocantins',
			},
		],
	});

	const cidades = await prisma.cidade.createMany({
		data: [
			{
				nome: 'São Paulo',
				sigla_uf: 'SP',
			},
			{
				nome: 'Foz do Iguaçu',
				sigla_uf: 'PR',
			},
			{
				nome: 'Rio de Janeiro',
				sigla_uf: 'RJ',
			},
			{
				nome: 'Belo Horizonte',
				sigla_uf: 'MG',
			},
			{
				nome: 'Curitiba',
				sigla_uf: 'PR',
			},
			{
				nome: 'Porto Alegre',
				sigla_uf: 'RS',
			},
			{
				nome: 'Florianópolis',
				sigla_uf: 'SC',
			},
			{
				nome: 'Brasília',
				sigla_uf: 'DF',
			},
			{
				nome: 'Goiânia',
				sigla_uf: 'GO',
			},
			{
				nome: 'Salvador',
				sigla_uf: 'BA',
			},
			{
				nome: 'Fortaleza',
				sigla_uf: 'CE',
			},
			{
				nome: 'Recife',
				sigla_uf: 'PE',
			},
			{
				nome: 'Manaus',
				sigla_uf: 'AM',
			},
			{
				nome: 'Belém',
				sigla_uf: 'PA',
			},
			{
				nome: 'São Luís',
				sigla_uf: 'MA',
			},
			{
				nome: 'João Pessoa',
				sigla_uf: 'PB',
			},
			{
				nome: 'Teresina',
				sigla_uf: 'PI',
			},
			{
				nome: 'Natal',
				sigla_uf: 'RN',
			},
			{
				nome: 'Campo Grande',
				sigla_uf: 'MS',
			},
			{
				nome: 'Cuiabá',
				sigla_uf: 'MT',
			},
			{
				nome: 'Porto Velho',
				sigla_uf: 'RO',
			},
			{
				nome: 'Boa Vista',
				sigla_uf: 'RR',
			},
			{
				nome: 'Palmas',
				sigla_uf: 'TO',
			},
			{
				nome: 'Maceió',
				sigla_uf: 'AL',
			},
			{
				nome: 'Macapá',
				sigla_uf: 'AP',
			},
		],
	});

	const bairros = await prisma.bairro.createMany({
		data: [
			{
				nome: 'Vila Mariana',
			},
			{
				nome: 'Centro',
			},
			{
				nome: 'Itaipu A',
			},
			{
				nome: 'Itaipu B',
			},
			{
				nome: 'Itaipu C',
			},
			{
				nome: 'Jardins',
			},
			{
				nome: 'Moema',
			},
			{
				nome: 'Itaim Bibi',
			},
			{
				nome: 'Pinheiros',
			},
			{
				nome: 'Vila Olímpia',
			},
			{
				nome: 'Vila Madalena',
			},
			{
				nome: 'Tatuapé',
			},
			{
				nome: 'Vila Nova Conceição',
			},
			{
				nome: 'Vila Leopoldina',
			},
			{
				nome: 'Vila Andrade',
			},
			{
				nome: 'Vila Prudente',
			},
			{
				nome: 'Vila Guarani',
			},
			{
				nome: 'Vila Clementino',
			},
		],
	});

	await prisma.tipo_logradouro.createMany({
		data: [
			{
				nome: 'Rua',
				sigla: 'Rua',
			},
			{
				nome: 'Avenida',
				sigla: 'Av.',
			},
			{
				nome: 'Alameda',
				sigla: 'Al.',
			},
			{
				nome: 'Travessa',
				sigla: 'Tv.',
			},
		],
	});

	await prisma.logradouro.createMany({
		data: [
			{
				nome: 'Paulista',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Brigadeiro Luís Antônio',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Ipiranga',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Angélica',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Faria Lima',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Juscelino Kubitschek',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Rebouças',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Sumaré',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Nove de Julho',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Europa',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Santo Amaro',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Berrini',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Faria Lima',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Cidade Jardim',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Doutor Arnaldo',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Hélio Pellegrino',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Jabaquara',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Liberdade',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Paulo VI',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'São Gabriel',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Vinte e Três de Maio',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Vinte e Oito de Setembro',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Vinte e Três de Maio',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'República Argentina',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Tancredo Neves',
				sigla_tipo_logradouro: 'Av.',
			},
		],
	});

	await prisma.endereco.createMany({
		data: [
			{
				cep: '85851200',
				id_bairro: 2,
				id_cidade: 2,
				id_logradouro: 2,
			},
		],
	});
}

async function main() {
	await generate_essentials();
}

main()
	.catch((e) => {
		console.log(e);
		process.exit(1);
	})
	.finally(() => {
		prisma.$disconnect();
	});
