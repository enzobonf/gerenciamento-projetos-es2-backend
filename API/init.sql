-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema projetos_es2
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema projetos_es2
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `projetos_es2` DEFAULT CHARACTER SET utf8 ;
USE `projetos_es2` ;

-- -----------------------------------------------------
-- Table `projetos_es2`.`tipo_logradouro`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projetos_es2`.`tipo_logradouro` (
  `sigla` VARCHAR(10) NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`sigla`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projetos_es2`.`logradouro`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projetos_es2`.`logradouro` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `sigla_tipo_logradouro` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_logradouro_tipo_logradouro1_idx` (`sigla_tipo_logradouro` ASC) VISIBLE,
  CONSTRAINT `fk_logradouro_tipo_logradouro1`
    FOREIGN KEY (`sigla_tipo_logradouro`)
    REFERENCES `projetos_es2`.`tipo_logradouro` (`sigla`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projetos_es2`.`unidade_federacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projetos_es2`.`unidade_federacao` (
  `sigla` VARCHAR(10) NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`sigla`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projetos_es2`.`cidade`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projetos_es2`.`cidade` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `sigla_uf` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_cidade_unidade_federacao1_idx` (`sigla_uf` ASC) VISIBLE,
  CONSTRAINT `fk_cidade_unidade_federacao1`
    FOREIGN KEY (`sigla_uf`)
    REFERENCES `projetos_es2`.`unidade_federacao` (`sigla`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projetos_es2`.`bairro`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projetos_es2`.`bairro` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projetos_es2`.`endereco`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projetos_es2`.`endereco` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cep` VARCHAR(8) NOT NULL,
  `id_logradouro` INT NOT NULL,
  `id_bairro` INT NOT NULL,
  `id_cidade` INT NOT NULL,
  INDEX `fk_endereco_logradouro1_idx` (`id_logradouro` ASC) VISIBLE,
  INDEX `fk_endereco_bairro1_idx` (`id_bairro` ASC) VISIBLE,
  INDEX `fk_endereco_cidade1_idx` (`id_cidade` ASC) VISIBLE,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_endereco_logradouro1`
    FOREIGN KEY (`id_logradouro`)
    REFERENCES `projetos_es2`.`logradouro` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_endereco_bairro1`
    FOREIGN KEY (`id_bairro`)
    REFERENCES `projetos_es2`.`bairro` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_endereco_cidade1`
    FOREIGN KEY (`id_cidade`)
    REFERENCES `projetos_es2`.`cidade` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projetos_es2`.`genero`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projetos_es2`.`genero` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `identificacao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projetos_es2`.`raca`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projetos_es2`.`raca` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `identificacao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projetos_es2`.`especialidade`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projetos_es2`.`especialidade` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projetos_es2`.`profissional`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projetos_es2`.`profissional` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `sobrenome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `ddi_telefone` VARCHAR(5) NULL DEFAULT '55',
  `num_telefone` VARCHAR(20) NULL,
  `id_genero` INT NOT NULL,
  `id_raca` INT NOT NULL,
  `id_especialidade` INT NOT NULL,
  `id_endereco` INT NOT NULL,
  `numero_endereco` INT NOT NULL,
  `complemento_endereco` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_profissional_endereco1_idx` (`id_endereco` ASC) VISIBLE,
  INDEX `fk_profissional_genero1_idx` (`id_genero` ASC) VISIBLE,
  INDEX `fk_profissional_raca1_idx` (`id_raca` ASC) VISIBLE,
  INDEX `fk_profissional_especialidade1_idx` (`id_especialidade` ASC) VISIBLE,
  CONSTRAINT `fk_profissional_endereco1`
    FOREIGN KEY (`id_endereco`)
    REFERENCES `projetos_es2`.`endereco` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_profissional_genero1`
    FOREIGN KEY (`id_genero`)
    REFERENCES `projetos_es2`.`genero` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_profissional_raca1`
    FOREIGN KEY (`id_raca`)
    REFERENCES `projetos_es2`.`raca` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_profissional_especialidade1`
    FOREIGN KEY (`id_especialidade`)
    REFERENCES `projetos_es2`.`especialidade` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projetos_es2`.`time`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projetos_es2`.`time` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projetos_es2`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projetos_es2`.`cliente` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `sobrenome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `ddi_telefone` VARCHAR(5) NULL DEFAULT '55',
  `num_telefone` VARCHAR(20) NULL,
  `id_genero` INT NOT NULL,
  `id_raca` INT NOT NULL,
  `id_endereco` INT NOT NULL,
  `numero_endereco` INT NOT NULL,
  `complemento_endereco` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_profissional_endereco1_idx` (`id_endereco` ASC) VISIBLE,
  INDEX `fk_profissional_genero1_idx` (`id_genero` ASC) VISIBLE,
  INDEX `fk_profissional_raca1_idx` (`id_raca` ASC) VISIBLE,
  CONSTRAINT `fk_profissional_endereco10`
    FOREIGN KEY (`id_endereco`)
    REFERENCES `projetos_es2`.`endereco` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_profissional_genero10`
    FOREIGN KEY (`id_genero`)
    REFERENCES `projetos_es2`.`genero` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_profissional_raca10`
    FOREIGN KEY (`id_raca`)
    REFERENCES `projetos_es2`.`raca` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projetos_es2`.`projeto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projetos_es2`.`projeto` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `objetivo` VARCHAR(100) NOT NULL,
  `id_cliente` INT NOT NULL,
  `id_time_responsavel` INT NOT NULL,
  `data_inicio` DATE NOT NULL,
  `data_fim` DATE NOT NULL,
  `valor` DOUBLE NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_projeto_time1_idx` (`id_time_responsavel` ASC) VISIBLE,
  INDEX `fk_projeto_cliente1_idx` (`id_cliente` ASC) VISIBLE,
  CONSTRAINT `fk_projeto_time1`
    FOREIGN KEY (`id_time_responsavel`)
    REFERENCES `projetos_es2`.`time` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_projeto_cliente1`
    FOREIGN KEY (`id_cliente`)
    REFERENCES `projetos_es2`.`cliente` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projetos_es2`.`time_has_profissional`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projetos_es2`.`time_has_profissional` (
  `id_time` INT NOT NULL,
  `id_profissional` INT NOT NULL,
  PRIMARY KEY (`id_time`, `id_profissional`),
  INDEX `fk_time_has_profissional_profissional1_idx` (`id_profissional` ASC) VISIBLE,
  INDEX `fk_time_has_profissional_time1_idx` (`id_time` ASC) VISIBLE,
  CONSTRAINT `fk_time_has_profissional_time1`
    FOREIGN KEY (`id_time`)
    REFERENCES `projetos_es2`.`time` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_time_has_profissional_profissional1`
    FOREIGN KEY (`id_profissional`)
    REFERENCES `projetos_es2`.`profissional` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;